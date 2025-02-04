import CommentsHeroSection from "@/components/CommentsHeroSection";
import Hero from "@/components/HeroSection";
import PopularCars from "@/components/PopularCars";
import RecommendedCars from "@/components/RecommendedCars";
import VideoSequence from "@/components/VideoPlayer";
import AuthCheck from '../components/AuthCheck';



export default function Home() {
  return (
   <>
    <AuthCheck>
      <Hero/>
      <VideoSequence />
      <PopularCars/>
      <RecommendedCars/>
      <CommentsHeroSection/>
    </AuthCheck>
   </>
  );
}
