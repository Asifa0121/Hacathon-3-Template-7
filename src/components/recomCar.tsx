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

export default function RecCar(){
    return(
        <div>
            <div>
            <div >
                <ul className="justify-between p-9 font-bold ml-4">
                    <li className="text-gray-500">Recommanded Car</li>
                </ul>
            </div>
            <div className="flex gap-8 flex-wrap">
                {/* Car 1 */}
            <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">All New Rush <CiHeart /></CardTitle> 
                <CardHeader className="text-gray-100-">SUV</CardHeader>
              
           
                    <Image src={car1} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 70L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$72.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>


{/* Car2 */}


            <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-36">CR -V <FaHeart className="text-red-700"/> </CardTitle> 
                <CardHeader className="text-gray-100-">SUV</CardHeader>
              
           
                    <Image src={car2} alt="car" className="w-[230px] h-[92px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$80.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>


            {/* Car 3 */}

            <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20"> All New Terious <CiHeart /></CardTitle> 
                <CardHeader className="text-gray-100 ">SUV</CardHeader>
              
           
                    <Image src={car3} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$74.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>



{/* Car4 */}

<div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">CR -V <FaHeart className="text-red-700"/></CardTitle> 
                <CardHeader className="text-gray-100-">SUV</CardHeader>
              
           
                    <Image src={car4} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 60L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 2 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$80.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>
             {/* Car 5 */}

             <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">MG ZX Exclusice <FaHeart className="text-red-700"/></CardTitle> 
                <CardHeader className="text-gray-100-">Hatchback</CardHeader>
              
           
                    <Image src={car5} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 70L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 4 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$76.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>
             {/* Car 6 */}

             <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">newMG ZS <CiHeart /></CardTitle> 
                <CardHeader className="text-gray-100-">SUV</CardHeader>
              
           
                    <Image src={car6} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$80.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>
             {/* Car 7 */}

             <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">MG ZX Excite <FaHeart className="text-red-700"/></CardTitle> 
                <CardHeader className="text-gray-100-">Hatchback</CardHeader>
              
           
                    <Image src={car7} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 90L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 4 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$74.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>
             {/* Car 8 */}

             <div className=" bg-[#FFFFFF] h-[388px] w-[317] border-blue-900">
                <CardTitle className="text-black-[20px] flex gap-20">New MG ZS <CiHeart /></CardTitle> 
                <CardHeader className="text-gray-100-">SV</CardHeader>
              
           
                    <Image src={car8} alt="car" className="w-[230px] h-[88px] ml-6"/>
                  
                <CardFooter className="text-gray-600 gap-3"> <FaGasPump  /> 80L
                <TbCircleTriangle /> Manual
                <MdPeopleAlt /> 6 people
                </CardFooter> 
                <div className="flex justify-between">
                <h2 className="text-black-[20px] font-bold">$80.00/ <sub>daily</sub></h2>
                <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              Rent Now
            </button></div>
         
            </div>
           

</div>
<div className="text-center mb-8">
            <button className="bg-blue-700  text-white px-6 py-2 rounded-sm hover:bg-blue-400">
              View More
            </button></div>
            </div>
        </div>
    )
}