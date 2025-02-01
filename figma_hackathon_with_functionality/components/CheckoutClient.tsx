"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FormDetails, CarRentalDetails } from "@/components/interface";
import { Star } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

async function getCarData(_id: string): Promise<CarRentalDetails | null> {
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

function calculateDays(pickupDate: string, dropoffDate: string): number {
  const start = new Date(pickupDate);
  const end = new Date(dropoffDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const hours = diffTime / (1000 * 3600);

  if (hours < 24) {
    return 1;
  }
  return Math.ceil(hours / 24);
}

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState<FormDetails>({} as FormDetails);
  const [car, setCar] = useState<CarRentalDetails | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    setFormData(params as FormDetails);

    if (params.carId) {
      getCarData(params.carId).then((carData) => {
        if (carData) {
          setCar(carData);
          if (params.pickupDate && params.dropoffDate && carData.rent) {
            const days = calculateDays(params.pickupDate, params.dropoffDate);
            const totalAmount = days * carData.rent;
            setFormData((prevData) => ({
              ...prevData,
              totalAmount: totalAmount,
            }));
          }
        }
      });
    }
  }, [searchParams]);

  const handleConfirm = async () => {
    if (!formData.name || !formData.phone || !formData.pickupDate || !formData.dropoffDate) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      // Save booking in database
      await client.create({
        _type: "rental",
        customer: formData.name,
        phoneNumber: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        pickupLocation: formData.pickupLocation,
        dropOffLocation: formData.dropoffLocation,
        pickupDate: formData.pickupDate,
        pickupTime: formData.pickupTime,
        dropOffDate: formData.dropoffDate,
        dropOffTime: formData.dropoffTime,
        totalAmount: formData.totalAmount as number,
        car: {
          _type: "reference",
          _ref: formData.carId,
        },
        status: "pending",
        orderDate: new Date().toISOString(),
      });

       // Proceed to Stripe Payment
       const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData.name,
          totalAmount: formData.totalAmount,
          carName: car?.name,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Payment failed");

      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: data.sessionId });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "Payment failed. Try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Confirm Your Booking</h1>
      {car && (
        <div className="bg-background dark:bg-background  p-4 rounded shadow-md dark:shadow-primary">
          {/* Image */}
          <div className="flex justify-center items-center">
            <Image src={car.image} alt={car.name} width={400} height={100} className="rounded-lg" />
          </div>
          {/* Name and Rent */}
          <div className="flex mt-2 justify-between items-center">  
            <h2 className="text-lg font-bold">{car.name}</h2>
            <p className="text-primary dark:text-primary font-bold">${car.rent} /day</p>
          </div>
          {/* Brand Name */}
          <div>
            <span className="text-[16px] font-normal text-gray-600 dark:text-gray-400">{car.brand}</span>
          </div>
          {/* Rating and Rating Count */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2 justify-center">
              <span className=""><Star className=' text-[#FBAD39]' fill='#FBAD39' width={20}  /></span>
              <span className="text-[16px] font-semibold">{car.rating}</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[16px] font-semibold">{car.ratingCount}+ rating</span>
            </div>
          </div>
          {/* Car type, capacity, steering and gasoline */}
          <div className="flex justify-between items-center mt-2">
            <span className="text-[16px] font-semibold text-gray-600 dark:text-gray-400">{car.carType}</span>
            <span className="text-[16px] font-semibold text-gray-600 dark:text-gray-400">Upto {car.personCapacity}</span>
            <span className="text-[16px] font-semibold text-gray-600 dark:text-gray-400">{car.steering}</span>
            <span className="text-[16px] font-semibold text-gray-600 dark:text-gray-400">{car.gasoline}</span>
          </div>
        </div>
      )}
      {/* User Detail */}
      <div className="bg-background dark:bg-background p-4 rounded mt-4 shadow-md dark:shadow-primary">
        {/* Customer Name */}
        <p><span className="text-[22px] font-medium">Customer Name:</span> <span className="text-[22px] text-primary font-semibold">{formData.name}</span></p>
        {/* Phone # */}
        <p><span className="text-[22px] font-medium">Phone:</span> <span className="text-[22px] text-primary font-semibold">{formData.phone}</span></p>
        {/* Email Address */}
        <p><span className="text-[22px] font-medium">Email:</span> <span className="text-[22px] text-primary font-semibold">{formData.email}</span></p>
        {/* pick up detail */}
        <p>
          <span className="text-[22px] font-medium">Pickup:</span> 
          <span className="text-[22px] text-primary font-semibold">{formData.pickupLocation}</span> on <span className="text-[22px] text-primary font-semibold">{formData.pickupDate ? new Date(formData.pickupDate).toLocaleDateString  ('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            })
            : 'N/A'}
          </span> at <span className="text-[22px] text-primary font-semibold">{formData.pickupTime}</span>
        </p>
        {/* Drop off detail */}
        <p>
          <span className="text-[22px] font-medium">Dropoff:</span>
          <span className="text-[22px] text-primary font-semibold">{formData.dropoffLocation}</span> on <span className="text-[22px] text-primary font-semibold">{formData.dropoffDate ? new Date(formData.dropoffDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            })
            : 'N/A'}
          </span> at <span className="text-[22px] text-primary font-semibold">{formData.dropoffTime}</span>
        </p>
        {formData.totalAmount && (
          <p className="">
            <span className="text-[22px] font-medium">Total Amount:</span> <span  className="text-[22px] text-primary font-semibold">$ {formData.totalAmount}</span> for <span  className="text-[22px] text-primary font-semibold">{calculateDays(formData.pickupDate ?? "", formData.dropoffDate ?? "")}</span> days
          </p>
        )}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-6">
        <Button onClick={handleConfirm} className="w-full" disabled={loading}>
          {loading ? "Processing..." : "Confirm & Pay"}
        </Button>
        <Button onClick={() => router.back()} className="w-full mt-2" variant="secondary">Go Back</Button>
      </div>
    </div>
  );
}