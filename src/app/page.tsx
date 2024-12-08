import Car from "@/components/car";
import PopularCar from "@/components/PopularCar";
import RecommendedCar from "@/components/RecommendedCar";



export default function Home(){
  return(
    <div>
      <Car/>
      <PopularCar/>
      <RecommendedCar/>
      
    </div>
  )
}