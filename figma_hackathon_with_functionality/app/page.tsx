import CommentsHeroSection from "@/components/CommentsHeroSection";
import Hero from "@/components/HeroSection";
import PopularCars from "@/components/PopularCars";
import RecommendedCars from "@/components/RecommendedCars";
import UserDetail from "@/components/UserDetail";
import VideoSequence from "@/components/VideoPlayer";



export default function Home() {
  return (
   <>
    <UserDetail/>
    <Hero/>
    <VideoSequence />
    <PopularCars/>
    <RecommendedCars/>
    <CommentsHeroSection/>
   </>
  );
}
