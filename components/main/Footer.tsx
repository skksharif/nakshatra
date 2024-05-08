import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="about-us" className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] cursor-pointer ">
        <div className="w-full flex flex-col items-center justify-center m-auto cursor-pointer">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap cursor-pointer">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start cursor-pointer">
                    <div className="font-bold text-[16px] " >Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px] cursor-pointer">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px] cursor-pointer">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                  <span className="text-[15px] ml-[6px] cursor-pointer">nakshatrawebdesigns@gmail.com</span>    
              </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] cursor-pointer">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px] cursor-pointer">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px] cursor-pointer">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px] cursor-pointer">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Our Services</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px] cursor-pointer">Responsive Web Apps</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px] cursor-pointer">Project Base Papers</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Nakshatra Web Designs 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer