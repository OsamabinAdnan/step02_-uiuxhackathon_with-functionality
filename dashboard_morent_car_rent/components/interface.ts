export interface RentalOrders {
    _id: string;
    customer: string;
    car?: {
        _id: string;
        name: string;
        image: string
    };
    phoneNumber: string;
    city: string;
    email: string;
    pickupLocation: string;
    dropOffLocation: string;
    pickupDate: string;
    pickupTime: string;
    totalAmount: number;
    status: string;
    orderDate: string;
    dropOffDate: string;
    dropOffTime: string;
}

export interface Cars {
    _id: string;
    name: string;
    image: string
}