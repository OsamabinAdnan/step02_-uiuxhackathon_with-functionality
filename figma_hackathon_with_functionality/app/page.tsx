import Hero from "@/components/HeroSection";
import PickDropDetail from "@/components/PickupDropOff";
import PopularCars from "@/components/PopularCars";
import RecommendedCars from "@/components/RecommendedCars";
import UserDetail from "@/components/UserDetail";


export default function Home() {
  return (
   <>
    <UserDetail/>
    <Hero/>
    <PickDropDetail/>
    <PopularCars/>
    <RecommendedCars/>
   </>
  );
}
