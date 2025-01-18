import Image from "next/image";
import car2 from "@/components/Images/car2.png"
import { CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Detail(){
    return(
        <div >
        <div className="flex w-full h-[2016px] ">
            <div className=" flex bg-[#3563E9] w-[492px] h-[360px] mt-[32px] rounded-xl">
                <div className="w-[372px] ml-[12px]  p-3 text-black">
                    <p className="text-[32px] text-white leading-[40px] ">Sports car with the best design and acceleration</p>
                    <p className="text-[16px] text-white leading-[24px] mt-4">Safety and comfort while driving a 
                    futuristic and elegant sports car</p>
                    <Image src={car2} alt="car"  className="image"/>
                </div>
                </div>


                <div className="bg-[#FFFFFF] w-[432px] h-[508px] mt-8 mr-2 ml-[16px] rounded-xl">
                    <CardTitle>Nissan GT - R</CardTitle>
                    <p className="flex gap-1">
                    <Star className="text-yellow-400 fill-yellow-400 w-[16px] h-[16px] mt-1"/>
                    <Star className="text-yellow-400 fill-yellow-400 w-[16px] h-[16px] mt-1"/>
                    <Star className="text-yellow-400 fill-yellow-400 w-[16px] h-[16px] mt-1"/>
                    <Star className="text-yellow-400 fill-yellow-400 w-[16px] h-[16px] mt-1"/>
                    <Star className="text-blue-400  w-[16px] h-[16px] mt-1"/>
                    440+ Reviewer
                    </p>
                    <p>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>


                </div>
              

            </div>
            
        </div>
        // </div>
    )
}


// To
// p
// 32px
// Lef
// t
// 916px
// Radiu
// s
// 10px