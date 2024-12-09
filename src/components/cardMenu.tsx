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
export default function Card(){
    return(
        <div>
            <div className="">
                <ul className="flex justify-between p-9 font-bold">
                    <li className="text-gray-500">Popular Car</li>
                    <li className="text-blue-700 underline">View All</li>
                </ul>
            </div>
            
    <div className="flex gap-8 flex-wrap p-5 ml-4">
        {/* Car 1 */}
            <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">Koenigsegg <FaHeart className="text-red-700" /></CardTitle> 
                <CardHeader className="text-gray-100-">Sports</CardHeader>
              
           
                    <Image src={car} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$99%/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>


{/* Car2 */}


            <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">Nissan GT - R <CiHeart /></CardTitle> 
                <CardHeader className="text-gray-100-">Sports</CardHeader>
              
           
                    <Image src={car2} alt="car" className="w-[230px] h-[92px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$99%/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>


            {/* Car 3 */}

            <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">Rolls - Royce <FaHeart className="text-red-700" /></CardTitle> 
                <CardHeader className="text-gray-100-">Sports</CardHeader>
              
           
                    <Image src={car3} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$99%/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>



{/* Car4 */}

<div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">Nissan GT - R <CiHeart /></CardTitle> 
                <CardHeader className="text-gray-100-">Sports</CardHeader>
              
           
                    <Image src={car4} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$99%/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>



        </div>
        </div>
        
    )
}