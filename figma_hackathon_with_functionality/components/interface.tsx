export interface Cars {
    _id:string,
    name:string,
    tags:string,
    slug:string,
    image:any,
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
    image:any,
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
    image:any,
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
    image:any,
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
    images:any[],
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
    image:any
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
    image:any
}