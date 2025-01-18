"use client"
import Image from "next/image";
import { CardFooter, CardHeader, CardTitle } from "./ui/card";
import { FaHeart } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa";
import { TbCircleTriangle } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

// Import Images
import car1 from "@/components/Images-recommamnd/car1.png"
import car2 from "@/components/Images-recommamnd/car2.png"
import car3 from "@/components/Images-recommamnd/car3.png"
import car4 from "@/components/Images-recommamnd/car4.png"
import car5 from "@/components/Images-recommamnd/car5.png"
import car6 from "@/components/Images-recommamnd/car6.png"
import car7 from "@/components/Images-recommamnd/car7.png"
import car8 from "@/components/Images-recommamnd/car8.png"
import { Link } from "lucide-react";

export default function RecCar(){
    return(
        <div>
            <div>
            <div>
                <ul className="justify-between p-9 font-bold ml-4">
                    <li className="text-gray-500">Recommanded Car</li>
                </ul>
            </div>
            <div className="flex flex-wrap  items-center justify-center gap-3 ml-3 overflow-hidden  md:flex-row">


                {/* Car 1 */}
                <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >All New Rush<CiHeart className="h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">SUV</p>
               </div>    
                    <Image src={car1} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 70L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$72.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>


{/* Car2 */}



<div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >CR -V<FaHeart className="text-red-700 h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">SUV</p>
               </div>    
                    <Image src={car2} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$99.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>



            {/* Car 3 */}



            <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >All New Terious<CiHeart className=" h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">SUV</p>
               </div>    
                    <Image src={car3} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$99.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>


{/* Car4 */}



<div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >CR -V<FaHeart className="text-red-700 h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">SUV</p>
               </div>    
                    <Image src={car4} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 60L
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

             {/* Car 5 */}
             <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >MG ZX Exclusice<FaHeart className="text-red-700 h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">Hatchback</p>
               </div>    
                    <Image src={car5} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 70L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 4people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$99.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>


             {/* Car 6 */}




             <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >newMG ZS<CiHeart className="h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">SUV</p>
               </div>    
                    <Image src={car6} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$99.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>

             {/* Car 7 */}

             <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >MG ZX Excite<FaHeart className="text-red-700 h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">Hatchback</p>
               </div>    
                    <Image src={car7} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 4people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$99.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>


             {/* Car 8 */}



             <div className=" bg-[#FFFFFF] h-[388px] w-[317px] rounded-xl hover: border-blue-900">
            <div className=" mt-[20px] ml-[24px] gap-1">
               <CardTitle className="text-black  flex justify-between" >New MG ZS<CiHeart className=" h-[24px] w-[24px]" /></CardTitle> 
               <p className="text-gray-500 text-[14px]">SV</p>
               </div>    
                    <Image src={car8} alt="car" className="w-[272px] h-[124px] ml-[22px] mt-[24px]"/>
                  
                <CardFooter className="text-gray-600 gap-3 mt-5"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black text-[20px] font-bold">$99.00/ <sub className="text-gray-500">day</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button>
            </div>
         
            </div>
            </div>



           
         <div className="text-center mb-16">
        
          <Link href="viewmore">  <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              View More
            </button></Link>
           
            </div>
            
            </div>
        </div>
    )
}