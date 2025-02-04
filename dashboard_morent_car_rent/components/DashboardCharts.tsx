import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { RentalOrders } from './interface'  // Import your type

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

// Define an interface for your component props
interface DashboardChartsProps {
  rentalOrders: RentalOrders[]
}

export default function DashboardCharts({ rentalOrders }: DashboardChartsProps) {
  // Convert totalAmount to a number in case it's a string
  const totalAmountEarned = rentalOrders.reduce(
    (sum, order) => sum + Number(order.totalAmount),
    0 
  )

  // If customer is a string, this works. If it's an object, adjust accordingly.
  const uniqueCustomers = new Set(
    rentalOrders.map(order => order.customer || 'N/A')
  )
  const totalCustomers = uniqueCustomers.size
  console.log('Total Customers:', totalCustomers) // Debugging step
  const carUsage = rentalOrders.reduce((acc, order) => {
    if (order.car && order.car.name) {
      acc[order.car.name] = (acc[order.car.name] || 0) + 1
    }
    return acc
  }, {} as { [key: string]: number })

  // Prepare data for the Bar Chart
  const barData = {
    labels: ['Total Earned'],
    datasets: [
      {
        label: 'Dashboard Stats',
        data: [totalAmountEarned], // Prevent missing values,
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)']
      }
    ]
  }
  console.log('Bar Chart Data:', barData)

  // Prepare data for the Pie Chart (car usage)
  const pieData = {
    labels: Object.keys(carUsage),
    datasets: [
      {
        data: Object.values(carUsage),
        backgroundColor: [
            'rgba(255,99,132,0.6)',
            'rgba(54,162,235,0.6)',
            'rgba(255,206,86,0.6)',
            'rgba(75,192,192,0.6)',
            'rgba(153,102,255,0.6)',
            'rgba(255,159,64,0.6)',
            'rgba(199,199,199,0.6)',
            'rgba(83,102,255,0.6)',
            'rgba(255,102,204,0.6)',
            'rgba(102,255,153,0.6)',
            'rgba(255,204,102,0.6)',
            'rgba(102,153,255,0.6)',
            'rgba(255,153,102,0.6)',
            'rgba(153,255,102,0.6)',
            'rgba(102,204,255,0.6)',
            'rgba(204,102,255,0.6)'

        ]
      }
    ]
    
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow "style={{ height: '500px' }}>
        <h3 className="text-xl font-bold mb-2">Total Earnings</h3>
        <Bar
          data={barData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Total Amount Earned & Customers' }
            }
          }}
        />
      </div>
      <div className="bg-white p-4 rounded shadow" style={{ height: '500px' }}>
        <h3 className="text-xl font-bold mb-2">Most Used Cars</h3>
        <Pie
          data={pieData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom' },
              title: { display: true, text: 'Car Usage Distribution' }
            }
          }}
        />
      </div>
    </div>
  )
}
