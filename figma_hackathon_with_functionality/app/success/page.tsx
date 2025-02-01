import { Suspense } from "react";
import SuccessClient from "../../components/SuccessClient";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
