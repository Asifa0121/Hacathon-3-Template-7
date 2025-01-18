import Image from "next/image";
import { CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FaGasPump } from "react-icons/fa";
import { TbCircleTriangle } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import car from "@/components/Images/car.png"
import car2 from "@/components/Images/car2.png"
import car3 from "@/components/Images/car3.png"
import car4 from "@/components/Images/car4.png"
import Link from "next/link";
export default function Card(){
    return(
        // Parent div
        <div>
            {/* Heading div */}
            <div className="ml-[24px] text-[16px]">
                <ul className="flex justify-between p-9 font-bold">
                    <li className="text-gray-500">Popular Car</li>
                    <li className="text-blue-700 underline">View All</li>
                </ul>
            </div>  {/* closing  div of heading */}

           
    <div className="flex flex-wrap items-center justify-center gap-3 ml-4 md:flex-row">  {/*  opening popular div*/}
        {/* Car 1 */}
            <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >Koenigsegg<FaHeart className="text-red-700 h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">Sports</p>
               </div>    
                    <Image src={car} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$99.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>


{/* Car2 */}


        <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >Nissan GT - R<CiHeart className=" h-[26px] w-[26px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">Sports</p>
               </div>    
                    <Image src={car2} alt="car" className=" Image w-[272px] h-[132px] ml-[22px] mt-[18px]"/>
                   
                  
                <CardFooter className="text-gray-600  gap-3 mt-5"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2people
                </CardFooter> 
                <div className="flex  justify-between">
                <h2 className="text-black text-[20px] font-bold">$80.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>


            {/* Car 3 */}



            <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >Rolls - Royce<FaHeart className="text-red-700 h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">Sports</p>
               </div>    
                    <Image src={car3} alt="car" className=" Image w-[220px] h-[68px] ml-[22px] mt-[70px]"/>
                   
                  
                <CardFooter className="text-gray-600  gap-3 mt-[35px]"> <FaGasPump  /> 70L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2people
                </CardFooter> 
                <div className="flex  justify-between">
                <h2 className="text-black text-[20px] font-bold">$96.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>

{/* Car4 */}

          <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >Nissan GT - R<CiHeart className="h-[26px] w-[26px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">Sports</p>
               </div>    
                    <Image src={car4} alt="car" className=" Image w-[272px] h-[132px] ml-[22px] mt-[18px]"/>
                   
                  
                <CardFooter className="text-gray-600  gap-3 mt-5"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2people
                </CardFooter> 
                <div className="flex  justify-between">
                <h2 className="text-black text-[20px] font-bold">$80.00/ <sub className="text-gray-500">day</sub></h2>
               
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
           
            </div>
         
            </div>



        </div>
        </div>
        
    )
}