import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
    const quotes: string[] = [
        "Built from sleepless nights, quiet hopes, and a heart that won’t give up.",
        // "Some people write journals, I write code — both tell the story of who we are.",
        // "I don’t just develop websites, I develop myself — with every challenge I face.",
        // "Behind every project is a part of me that dared to dream.",
        // "I create not just to build, but to feel — and to make others feel.",
        // "Every line of code carries a piece of my story."
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className='relative z-50'>

        <div className="bg-[#F5F5DC] h-[50vh] flex justify-center items-center px-[10vw]">
            <div className="text-center">
                <p className='text-[22px] text-[#1b1b1b] font-[400]'>&quot;{randomQuote}&quot;</p>
                <div className="flex justify-center gap-[2vw] py-[6vh]">
                    <FaGithub className='text-#1b1b1b text-[48px] border-[1px] border-[#1b1b1b] p-[12px] hover:p-[10px] transition-all rounded-[50px] cursor-pointer' />
                    <FaInstagram className='text-#1b1b1b text-[48px] border-[1px] border-[#1b1b1b] p-[12px] hover:p-[10px] transition-all rounded-[50px] cursor-pointer' />
                    <FaFacebook className='text-#1b1b1b text-[48px] border-[1px] border-[#1b1b1b] p-[12px] hover:p-[10px] transition-all rounded-[50px] cursor-pointer' />
                    <FaLinkedin className='text-#1b1b1b text-[48px] border-[1px] border-[#1b1b1b] p-[12px] hover:p-[10px] transition-all rounded-[50px] cursor-pointer' />
                    <FaWhatsapp className='text-#1b1b1b text-[48px] border-[1px] border-[#1b1b1b] p-[12px] hover:p-[10px] transition-all rounded-[50px] cursor-pointer' />
                    <SiLeetcode className='text-#1b1b1b text-[48px] border-[1px] border-[#1b1b1b] p-[12px] hover:p-[10px] transition-all rounded-[50px] cursor-pointer' />

                </div>
                <p className='text-[16px] text-[#1b1b1b] font-[400]'>Md Abir Hossain © 2025</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
