"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [message, setMessage] = useState("Processing...");

  useEffect(() => {
    if (sessionId) {
      setMessage("Payment successful! Your booking is confirmed.");
    }
  }, [sessionId]);

  return (
    <>
      <div className="h-[100vh]">
        <div className="md:max-w-[50vw] mx-auto px-2 md:px-0 py-8">
          <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
          <div className="text-center space-y-8">
            <h1 className="md:text-3xl text-xl font-semibold text-center">{message}</h1>
            <p className="text-gray-600 my-2 dark:text-gray-400 md:text-xl text-md">
              Thank you for your booking. You will receive a confirmation email
              soon.
            </p>
            <p className="text-md md:text-xl">Have a great day!</p>
            <Button asChild className="mt-5">
              <Link href="/">Go Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
