
   import React from "react";
export const Footer = () => {
    return (


    <footer className="bg-white border-t border-gray-200 ">
      <div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4">
          {/* Logo and Vision */}
          <div className="pl-8 ml-8 mr-10 gap-[16px]">
            <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
            <p className="text-sm text-gray-600 mt-2">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div className="w-[152px] h-[244px] top-[80px] left-[804px]">
            <h2 className="text-lg font-semibold text-black">About</h2>
            <ul className="mt-2">
              <li>
              
                  How it works
               
              </li>
              <li>
             
                  Features
               
              </li>
              <li>
               
                  Partnership
                
              </li>
              <li>
                
                  Business Relation
                
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-[152px] h-[244px] top-[80px] left-[1016px]">
            <h2 className="text-lg font-semibold text-black">Community</h2>
            <ul className="mt-2 space-y-1">
              <li>
                
                  Events
               
              </li>
              <li>
               
                  Blog
              
              </li>
              <li>
                
                  Podcast
            
              </li>
              <li>
                
                  Invite a friend
          
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="w-[152px] h-[244px] top-[80px] left-[1228px]">
            <h2 className="text-lg font-semibold text-black">Socials</h2>
            <ul className="mt-2 space-y-1">
              <li>
                
                  Discord
              
              </li>
              <li>
                
                  Instagram
              
              </li>
              <li>
                
                  Twitter
              
              </li>
              <li>
            
                  Facebook
            
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">
            © 2022 MORENT. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
          
              Privacy & Policy
        
      
              Terms & Condition
          
          </div>
        </div>
      </div>
    </footer>
   ) };

   export default Footer;