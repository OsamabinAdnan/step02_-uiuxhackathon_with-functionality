export interface Cars {
    _id:string,
    name:string,
    tags:string,
    slug:string,
    image:string,
    rent:number,
    previousRent:number,
    steering:string,
    personCapacity:string
    carType:string
    gasoline:string
    brand:string
}


export default interface Popular_Cars {
    _id:string,
    name:string,
    tags:string,
    slug:string,
    image:string,
    rent:number,
    previousRent:number,
    steering:string,
    personCapacity:string
    carType:string
    gasoline:string
    brand:string
}

export interface Recommended_Cars {
    _id:string,
    name:string,
    tags:string,
    slug:string,
    image:string,
    rent:number,
    previousRent:number,
    steering:string,
    personCapacity:string
    carType:string
    gasoline:string
    brand:string
}

export interface Categories {
    _id:string,
    name:string,
    tags:string,
    slug:string,
    image:string,
    rent:number,
    previousRent:number,
    steering:string,
    personCapacity:string
    carType:string
    gasoline:string
    brand:string
}

export interface CarDetailPage {
    _id:string,
    name:string,
    description:string,
    tag:string,
    slug:string,
    images:string[],
    rent:number,
    previousRent:number,
    steering:string,
    personCapacity:string
    carType:string,
    gasoline:string,
    brand:string,
    rating:number,
    ratingCount:number
}

export interface Comment {
    _id:string,
    CarName:string,
    comment:string,
    name:string,
    designation:string,
    rating:number,
    date:string,
    image:string
}

export interface RecentCars {
    _id:string,
    name:string,
    tags:string,
    slug:string,
    image:string,
    rent:number,
    previousRent:number,
    steering:string,
    personCapacity:string
    carType:string
    gasoline:string
    brand:string
}

export interface PaymentPage {
    _id:string,
    name:string,
    rent:number,
    previousRent:number,
    rating:number,
    ratingCount:number,
    image:string
}

export interface SearchCar {
    _id:string,
    name:string,
    tags:string,
    slug:string,
    image:string,
    rent:number,
    previousRent:number,
    steering:string,
    personCapacity:string
    carType:string
    gasoline:string
    brand:string
}

export interface CarRentalDetails {
    name: string;
    rent: number;
    totalAmount: number; // Calculated total amount
    id:string;
    image:string,
    steering:string,
    personCapacity:string,
    carType:string,
    gasoline:string,
    description:string,
    previousRent:number,
    rating:number,
    ratingCount:number,
    brand:string
    tags:string,
}

export interface FormDetails {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    pickupLocation?: string;
    dropoffLocation?: string;
    pickupDate?: string;
    pickupTime?: string;
    dropoffDate?: string;
    dropoffTime?: string;
    totalAmount?: number;
    carId?: string;
  }

  export interface HeroComment {
    _id:string,
    carName:string,
    comment:string,
    name:string,
    designation:string,
    rating:number,
    date:string,
    image:string
}