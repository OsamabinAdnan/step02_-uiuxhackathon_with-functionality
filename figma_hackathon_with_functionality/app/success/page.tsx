"use client";

import { Suspense } from "react";
import SuccessContent from "../../components/SuccessContent";

export default function Success() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
