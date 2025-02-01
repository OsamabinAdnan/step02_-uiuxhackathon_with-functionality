"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Star } from "lucide-react";
import { CarRentalDetails } from "@/components/interface";

// Async function to fetch data based on the car ID
async function getData(_id: string) {
  const query = `
    *[_type == "car" && _id == "${_id}"] [0] {
      _id,
        name,
        rent,
        "image": images[0].asset->url,
        rating,
        ratingCount,
        brand,
        steering,
        personCapacity,
        carType,
        gasoline,
        description,
        previousRent,
        "tags": tags,
    }
  `;
  return client.fetch(query);
}

export default function Payment() {
  const router = useRouter();
  const params = useParams(); 
  const _id = params?._id as string;

  const [car, setCar] = useState<CarRentalDetails | null>(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffLocation: "",
    dropoffDate: "",
    dropoffTime: "",
  });

  useEffect(() => {
    if (_id) {
      getData(_id).then(setCar);
    }
  }, [_id]);

  if (!car) return (
    <div className="max-w-[1440px] mx-auto p-6">
      <p className="text-primary dark:text-primary font-bold text-4xl">Loading...</p>
    </div>
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateNumberOfDays = () => {
    const { pickupDate, dropoffDate } = formData;
    if (!pickupDate || !dropoffDate) return 1;
    const pickup = new Date(pickupDate);
    const dropoff = new Date(dropoffDate);
    const timeDifference = dropoff.getTime() - pickup.getTime();
    return Math.max(Math.ceil(timeDifference / (1000 * 3600 * 24)), 1);
  };

  const calculateTotalAmount = () => car.rent * calculateNumberOfDays();

  const validateForm = () => {
    const { name, phone, address, city, pickupLocation, pickupDate, pickupTime, dropoffLocation, dropoffDate, dropoffTime } = formData;
    if (!name || !phone || !address || !city || !pickupLocation || !pickupDate || !pickupTime || !dropoffLocation || !dropoffDate || !dropoffTime) {
      setError("Please fill in all fields before proceeding.");
      return false;
    }

    const now = new Date();
    const pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
    const dropoffDateTime = new Date(`${dropoffDate}T${dropoffTime}`);

    if (pickupDateTime < now) {
      setError("Enter a future pickup date and time.");
      return false;
    }

    if (dropoffDateTime <= pickupDateTime) {
      setError("Drop-off date should be greater than pickup date.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const totalAmount = calculateTotalAmount();
    const numberOfDays = calculateNumberOfDays();

    const query = new URLSearchParams({
      ...formData,
      carId: _id,
      totalAmount: totalAmount.toFixed(2),
      numberOfDays: numberOfDays.toString(),
    }).toString();

    router.push(`/checkout?${query}`);
  };

  return (
    <div className="max-w-[1440px] mx-auto p-6">
      <div className="bg-background dark:bg-background md:p-4 p-2 rounded">
        <h1 className="text-[20px] font-bold">Rental Summary</h1>
        <p className="text-[14px] font-medium text-muted-foreground">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
        <div className="flex justify-center items-center md:gap-8 gap-4 my-4 md:flex-row flex-col-reverse">
          <Image src={car.image} alt={car.name} width={650} height={200} />
          <div>
            <h1 className="lg:text-[32px] text-[20px] font-bold">{car.name}</h1>
            <div className="flex items-center gap-1">
              <Star className="text-[#FBAD39]" fill="#FBAD39" />
              <span className="text-[14px] font-medium text-muted-foreground">{car.ratingCount}+ Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 flex-wrap">
          <p className="text-[18px] font-medium text-muted-foreground dark:text-muted-foreground"><span>Brand:</span> <span>{car.brand}</span></p>
          <p className="text-[18px] font-medium text-muted-foreground dark:text-muted-foreground"><span>Type:</span> <span>{car.carType}</span></p>
          <p className="text-[18px] font-medium text-muted-foreground dark:text-muted-foreground"><span>Transmission:</span> <span>{car.steering}</span></p>
          <p className="text-[18px] font-medium text-muted-foreground dark:text-muted-foreground"><span>Person Capacity:</span> <span>{car.personCapacity}</span></p>
          <p className="text-[18px] font-medium text-muted-foreground dark:text-muted-foreground"><span>Gasoline:</span> <span>{car.gasoline}</span></p>
        </div>
        <div className="border-t-2 border-muted-foreground dark:border-muted-foreground mt-2">
          <div className="flex justify-between items-center mt-2">
            <p className="text-[12px] font-semibold text-muted-foreground">Subtotal</p>
            <p className="text-[16px] font-semibold">${car.rent}.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[12px] font-semibold text-muted-foreground">Tax</p>
            <p className="text-[16px] font-semibold">$0</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[12px] font-semibold text-muted-foreground">Total no of day(s)</p>
            <p className="text-[16px] font-semibold">{calculateNumberOfDays()} day(s)</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="lg:text-[20px] text-[16px] font-bold">Total Rental Price</h1>
          <h1 className="lg:text-[32px] text-[24px] font-bold text-primary dark:text-primary">${calculateTotalAmount()}.00</h1>
        </div>
      </div>

      <div className="bg-background p-4 mt-6 rounded shadow-md">
        <h1 className="text-xl font-bold">Billing Info</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" />
          <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number i.e., 3001234567" />
          <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
          <Input name="address" value={formData.address} onChange={handleChange} placeholder="Residential Address" />
          <Input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
        </div>
      </div>

      <div className="bg-background p-4 mt-6 rounded shadow-md">
        <h1 className="text-xl font-bold">Rental Info</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-4">
            <h1>Pick up Location</h1>
            <Input name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Pick-Up Location" />
            <Input name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} />
            <Input name="pickupTime" type="time" value={formData.pickupTime} onChange={handleChange} />
          </div>
          <div className="space-y-4">
            <h1>Drop off Location</h1>
            <Input name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} placeholder="Drop-Off Location" />
            <Input name="dropoffDate" type="date" value={formData.dropoffDate} onChange={handleChange} />
            <Input name="dropoffTime" type="time" value={formData.dropoffTime} onChange={handleChange} />
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-6">
        <Button onClick={handleSubmit} className="w-full">Proceed to Checkout</Button>
      </div>
    </div>
  );
}
