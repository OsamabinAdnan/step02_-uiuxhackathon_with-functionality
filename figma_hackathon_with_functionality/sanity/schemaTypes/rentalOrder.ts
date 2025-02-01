
export default {
  name: 'rental',
  title: 'Rental Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'string',
    },
    {
      name: 'car',
      title: 'Car',
      type: 'reference',
      to: [{ type: 'car' }],
    },
    {
      name:'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name:'address',
      title: 'Permanent Address',
      type: 'string',
    },
    {
      name:'city',
      title: 'City',
      type: 'string',
    },
    {
      name:'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'pickupLocation',
      title: 'Pickup Location Address',
      type: 'string',
    },
    {
      name: 'dropOffLocation',
      title: 'Drop Off Location Address',
      type: 'string',
    },
    {
      name: 'pickupDate', // Changed to 'date' type
      title: 'Pickup Date',
      type: 'date', // Only stores the date part
    },
    {
      name: 'pickupTime', // Added as 'string' for time storage
      title: 'Pickup Time',
      type: 'string', // Time can be stored as a string in 'HH:mm' format (e.g., "15:31")
    },
    {
      name: 'dropOffDate', // Changed to 'date' type
      title: 'Drop Off Date',
      type: 'date', // Only stores the date part
    },
    {
      name: 'dropOffTime', // Added as 'string' for time storage
      title: 'Drop Off Time',
      type: 'string', // Time can be stored as a string in 'HH:mm' format (e.g., "15:31")
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
      initialvalue: 'pending',
    },
    {
      name: 'orderDate', // New field for order date
      title: 'Order Date',
      type: 'datetime', // Assuming it's a timestamp
    },
  ],
}
