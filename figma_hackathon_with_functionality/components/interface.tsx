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
    rent:string,
    previousRent:string,
    steering:string,
    personCapacity:string
    carType:string
    gasoline:string
}