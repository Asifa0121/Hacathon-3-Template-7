import Image from   "next/image";
import car2 from '@/../public/images/car2.png'
import PopularCar from "@/components/PopularCar";
import RecommendedCar from "@/components/RecommendedCar";
export default function Nissa(){
    return(
        <div>
              <div
      className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[280px] h-full bg-[#3563E9] p-2">

      <h3 className="w-[272px] h-[96px] text-white text-[24px] font-sans font-bold">Sports car with the best design and acceleration</h3>
                <p className="text-white text-[Plus Jakarta Sans]text-[20px] mt-4 mb-4">Safety and comfort while driving a 
                futuristic and elegant sports car</p>
               <Image src={car2} alt="car" className="h-[140px] w-[280px]"/>



      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">Nissan GT - R</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the race track.
        </p>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu.
        </p>

        <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
        
          <button
          className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[40px] w-[130px] whitespace-nowrap"
          
        >
          Rent Now
        </button>
            
           
        
        </div>
      </div>
    </div>
   <PopularCar/>
   <RecommendedCar/>
    </div>
      
    )
}