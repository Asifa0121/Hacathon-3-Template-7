'use client'
import Image from 'next/image'; 
import { CiSearch } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { RiSettings3Fill } from 'react-icons/ri';
import { useState } from 'react'; 
import profile from '@/components/Images/profile.png'; 
import Link from 'next/link';

    


  
  export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false); 
  
    // Toggle the mobile menu
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    return (
      <div className="w-full">
        <div className="flex bg-white border border-gray-300 w-full h-[124px] justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <div className="title text-lg font-semibold w-[148px] h-[44px]">
            MORENT
          </div>
          
          {/* Search Bar */}
          <div className="border border-gray-300 bg-white flex items-center w-full md:w-[492px] h-[44px] px-4 rounded-md">
            <CiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search something here"
              className="w-full py-2 rounded-md pr-10 focus:outline-none"
            />
          </div>
  
          {/* Mobile  Menu Bar*/}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <div className="w-6 h-6 bg-gray-600 rounded flex flex-col justify-between items-center space-y-1">
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </div>
          </div>
  
          {/* Icons and Profile for larger screens */}
          <div className="hidden md:flex items-center gap-4 md:gap-6">
            <FaHeart className="w-[26px] h-[26px] text-gray-500" />
            <IoIosNotifications className="w-[30px] h-[30px] text-gray-500" />
            <RiSettings3Fill className="w-[30px] h-[30px] text-gray-500" />
            <Image
              src={profile}
              alt="profile"
              className="w-[44px] h-[44px] rounded-full"
            />
          </div>
        </div>
  
        {/* Mobile Menu (Initially Hidden) */}
        {menuOpen && (
          <div className="absolute top-0 right-0 bg-white shadow-lg w-48 p-4 mt-12 flex flex-col gap-4 md:hidden">
    
            <Link href="#" className="text-gray-800"><IoIosNotifications /></Link>
            <Link href="#" className="text-gray-800"><RiSettings3Fill/></Link>
          </div>
        )}
      </div>
    );
  }

    
  
  








    