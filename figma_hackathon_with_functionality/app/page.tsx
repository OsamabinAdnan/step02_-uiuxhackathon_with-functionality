import Hero from "@/components/HeroSection";
import PickDropDetail from "@/components/PickupDropOff";
import PopularCars from "@/components/PopularCars";
import RecommendedCars from "@/components/RecommendedCars";


export default function Home() {
  return (
   <>
    <Hero/>
    <PickDropDetail/>
    <PopularCars/>
    <RecommendedCars/>
   </>
  );
}
