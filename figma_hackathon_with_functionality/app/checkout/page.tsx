"use client";

import { Suspense } from "react";
import CheckoutContent from "../../components/CheckoutContent";

export default function Checkout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
