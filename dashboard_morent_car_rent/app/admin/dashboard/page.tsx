'use client'
import React, { useEffect, useState } from 'react'
import { RentalOrders } from '@/components/interface'
import { client } from '../../../sanity/lib/client'
import Swal from 'sweetalert2'
import ProtectedRoute from '@/components/protectedRoute/page'
import Image from 'next/image'
import DashboardCharts from '@/components/DashboardCharts'
import Logout from '@/components/Logout'

export default function AdminDashboard() {
  const [rentalOrders, setRentalOrders] = useState<RentalOrders[]>([])
  const [selectedOrderID, setSelectedOrderID] = useState<string | null>(null)
  const [filterOrders, setFilterOrders] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null) // Use string for error message

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "rental"] | order(orderDate desc) {
            _id,
            customer,
            "car": car->{
              _id,
              name,
              "image": images[0].asset->url 
            },
            phoneNumber,
            city,
            email,
            pickupLocation,
            dropOffLocation,
            pickupDate,
            pickupTime,
            totalAmount,
            status,
            orderDate,
            dropOffDate,
            dropOffTime,
          }`
        )
        setRentalOrders(data)
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to load rental orders. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredOrders =
    filterOrders === 'all'
      ? rentalOrders
      : rentalOrders.filter(order => order.status === filterOrders)

  const toggleOrderDetails = (orderId: string) => {
    setSelectedOrderID(prev => (prev === orderId ? null : orderId))
  }

  const handleDeleteOrder = async (orderId: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    if (!result.isConfirmed) return

    try {
      await client.delete(orderId)
      setRentalOrders(prevOrder => prevOrder.filter(order => order._id !== orderId))
      Swal.fire('Deleted!', 'Your order has been deleted.', 'success')
    } catch (error) {
      console.error('Error deleting order:', error)
      Swal.fire('Error!', 'Failed to delete the order.', 'error')
    }
  }

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await client.patch(orderId).set({ status: newStatus }).commit()

      setRentalOrders(prevOrders =>
        prevOrders.map(order =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      )

      Swal.fire('Success!', `Rental Order status updated to ${newStatus}.`, 'success')
    } catch (error) {
      console.error('Error updating order status:', error)
      Swal.fire('Error!', 'Something went wrong while updating the status.', 'error')
    }
  }

  let sr = 0

  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-4">
        <nav className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-4 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl">Morent Dashboard</h2>
          <Logout/>
        </nav>
        {!loading && !error && (
          <>
            {/* Existing UI elements */}
            <DashboardCharts rentalOrders={rentalOrders} />
            {/* Other components or tables */}
          </>
        )}
        {/* Loading and Error States */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {loading ? (
            <p className="text-center text-lg font-semibold">Loading rental orders...</p>
          ) : error ? (
            <p className="text-center text-[hsl(var(--destructive))] font-semibold">{error}</p>
          ) : (
            <>
              {/* Filter Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
                <h2 className="text-[hsl(var(--primary))] font-bold text-[28px] sm:text-[32px]">
                  Rental Order Detail
                </h2>
                <div className="flex flex-wrap gap-2">
                  {['all', 'confirmed', 'completed', 'inRoute', 'pending', 'cancelled'].map(status => (
                    <button
                      key={status}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                        filterOrders === status
                          ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold'
                          : 'text-[hsl(var(--primary))]'
                      }`}
                      onClick={() => setFilterOrders(status)}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
             
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-[hsl(var(--border))] text-sm lg:text-base">
                  <thead className="bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]">
                    <tr>
                      <th className="p-2 text-[22px] font-semibold">SR#</th>
                      <th className="p-2 text-[22px] font-semibold">Date</th>
                      <th className="p-2 text-[22px] font-semibold">Car Use(d)</th>
                      <th className="p-2 text-[22px] font-semibold">Customer Name</th>
                      <th className="p-2 text-[22px] font-semibold">Pick-up Location</th>
                      <th className="p-2 text-[22px] font-semibold">Drop-off Location</th>
                      <th className="p-2 text-[22px] font-semibold">Total</th>
                      <th className="p-2 text-[22px] font-semibold">Status</th>
                      <th className="p-2 text-[22px] font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[hsl(var(--border))]">
                    {filteredOrders.map(rentalOrder => (
                      <React.Fragment key={rentalOrder._id}>
                        <tr
                          className="cursor-pointer hover:bg-[hsl(var(--secondary))] transition-all"
                          onClick={() => toggleOrderDetails(rentalOrder._id)}
                        >
                          <td className="p-2 text-[20px] font-normal text-center">{++sr}</td>
                          <td className="p-2 text-[20px] font-normal text-center">
                            {new Date(rentalOrder.orderDate).toLocaleDateString()}
                          </td>
                          <td className="p-2 text-[20px] font-normal text-center">
                            {rentalOrder.car?.name || 'N/A'}
                          </td>
                          <td className="p-2 text-[20px] font-normal text-center">{rentalOrder.customer || 'N/A'}</td>
                          <td className="p-2 text-[20px] font-normal text-center">
                            {rentalOrder.pickupLocation}
                          </td>
                          <td className="p-2 text-[20px] font-normal text-center">
                            {rentalOrder.dropOffLocation}
                          </td>
                          <td className="p-2 text-[20px] font-normal text-center">
                            ${rentalOrder.totalAmount}
                          </td>
                          <td className="p-2 text-[20px] font-normal text-center">
                            <select
                              value={rentalOrder.status || ''}
                              onChange={e => handleStatusChange(rentalOrder._id, e.target.value)}
                              className="bg-[hsl(var(--input))] p-1 rounded w-full sm:w-auto"
                            >
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="inRoute">In-route</option>
                              <option value="pending">Pending</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="p-2 text-[20px] font-normal text-center">
                            <button
                              onClick={e => {
                                e.stopPropagation()
                                handleDeleteOrder(rentalOrder._id)
                              }}
                              className="bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] px-3 py-1 rounded hover:bg-[hsl(var(--destructive)/0.8)] transition-all"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        {selectedOrderID === rentalOrder._id && (
                          <tr>
                            <td colSpan={9} className="bg-[hsl(var(--muted))] p-4 transition-all animate-fadeIn duration-500">
                              <h3 className="font-bold text-lg sm:text-xl mb-2">Order Details</h3>
                              <div className='flex justify-between items-center'>
                                <div>
                                <p className="text-sm sm:text-base">
                                    <strong>Customer Name:</strong> {rentalOrder.customer}
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Phone:</strong> {rentalOrder.phoneNumber}
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Email:</strong> {rentalOrder.email}
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>City:</strong> {rentalOrder.city}
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Pick up Date, Time and Location:</strong>
                                    <span className=' text-[#2563EB]'> {rentalOrder.pickupDate ? new Date(rentalOrder.pickupDate).toLocaleDateString ('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric'
                                    }):"N/A"}</span> | 
                                    <span className='text-[#2563EB]'> {rentalOrder.pickupTime}</span> | 
                                    <span className='text-[#2563EB]'> {rentalOrder.pickupLocation}</span>
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Drop off Date, Time and Location:</strong> 
                                    <span className='text-[#2563EB]'> <span className=' text-[#2563EB]'>{rentalOrder.dropOffDate ? new Date(rentalOrder.dropOffDate).toLocaleDateString ('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric'
                                    }):"N/A"}</span></span> | 
                                    <span className='text-[#2563EB]'> {rentalOrder.dropOffTime}</span> | 
                                    <span className='text-[#2563EB]'> {rentalOrder.dropOffLocation}</span>
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Car Name:</strong> <span className='font-semibold text-[#2563EB]'> {rentalOrder.car?.name}</span>
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Service Request Date:</strong> <span className=' text-[#2563EB]'>{rentalOrder.orderDate ? new Date(rentalOrder.orderDate).toLocaleDateString ('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric'
                                    }):"N/A"}</span>
                                  </p>
                                  <p className="text-sm sm:text-base">
                                    <strong>Total amount:</strong> <span className='font-semibold text-[#2563EB]'> $ {rentalOrder.totalAmount}</span>
                                  </p>
                                </div>
                                {rentalOrder.car?.image && (
                                  <div className="mt-2">
                                    <Image
                                      src={rentalOrder.car.image}
                                      alt={rentalOrder.car.name}
                                      width={500}
                                      height={500}
                                      priority
                                    />
                                  </div>
                                )}
                              </div>
                              
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="block md:hidden space-y-4">
                {filteredOrders.map((rentalOrder, index) => (
                  <div
                    key={rentalOrder._id}
                    className="bg-[hsl(var(--muted))] rounded-lg p-4 shadow hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => toggleOrderDetails(rentalOrder._id)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg text-[hsl(var(--primary))]">
                        {index + 1}. {rentalOrder.car?.name || 'N/A'}
                      </h3>
                      <span className="text-sm text-gray-600">
                        {new Date(rentalOrder.orderDate).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm">
                      <strong>Customer:</strong> {rentalOrder.customer}
                    </p>
                    <p className="text-sm">
                      <strong>Total:</strong> ${rentalOrder.totalAmount}
                    </p>
                    <div className="mt-2 flex flex-col space-y-2">
                      <select
                        value={rentalOrder.status || ''}
                        onChange={e => handleStatusChange(rentalOrder._id, e.target.value)}
                        className="bg-[hsl(var(--input))] p-1 rounded text-sm"
                      >
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="inRoute">In-route</option>
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <button
                        onClick={e => {
                          e.stopPropagation()
                          handleDeleteOrder(rentalOrder._id)
                        }}
                        className="bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                    {selectedOrderID === rentalOrder._id && (
                      <div className="mt-4 bg-white p-3 rounded shadow overflow-x-auto">
                        <div>
                          <p className="text-sm">
                            <strong>Phone:</strong> {rentalOrder.phoneNumber}
                          </p>
                          <p className="text-sm text-wrap">
                            <strong>Email:</strong> {rentalOrder.email}
                          </p>
                          <p className="text-sm">
                            <strong>City:</strong> {rentalOrder.city}
                          </p>
                        </div>
                        {rentalOrder.car?.image && (
                          <div className="mt-2">
                            <Image
                              src={rentalOrder.car.image}
                              alt={rentalOrder.car.name}
                              width={300}
                              height={200}
                              priority
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
