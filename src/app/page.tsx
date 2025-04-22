'use client';
import { Oswald } from 'next/font/google';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '@/components/loader';
import MyImage from '@/components/myimage';


const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700',],
});
// import Image from 'next/image';

export default function Home() {




  const [,setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
              duration: 1000, // Animation duration in ms
              easing: 'ease-in-out', // Easing type
              once: false, // Animation happens only once
            });
    // Set loading to false after 2.5 seconds to show the main contact page
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
   <div className="overflow-hidden">
    <Loader/>
      <div className="relative w-[100%]">
        <div className="h-[100vh]"></div>
        <div className="bg-[#F5F5DC] h-[100vh] w-[100%] fixed bottom-0">
          <div className={oswald.className}>
            <div className="flex flex-col justify-center pt-[22vh] md:pt-[20vh]  ">
              <div data-aos='fade-in' data-aos-delay="1600"><p className='text-center text-[5vw] md:text-[1.8vw] font-[300]'>👋🏻, my name is Abir and I am a Freelancer</p></div>
              <div className="leading-[12vh] md:leading-[18vh] ">
                <div data-aos='fade-right' data-aos-delay="1600"><p className='text-center text-[15vw] md:text-[10vw] font-[700] cursor-pointer text-stroke1'><span className='stroke01'>W</span><span className='stroke02'>e</span><span className='stroke03'>b</span><span className='stroke04'>d</span><span className='stroke05'>e</span><span className='stroke06'>v</span><span className='stroke07'>e</span><span className='stroke08'>l</span><span className='stroke09'>o</span><span className='stroke10'>p</span><span className='stroke11'>e</span><span className='stroke12'>r</span></p></div>
                <div className=' relative z-[0] imageShowHover' data-aos='fade-left' data-aos-delay="1600"><p className=' text-center text-[15vw] md:text-[10vw] font-[700]  cursor-pointer'><span className='text-stroke2'>& <span className='sm:hidden'> <br className='sm:hidde' /> </span> App Developer</span></p></div>
              </div>
              <div className="flex justify-center gap-[5vw] sm:gap-[1vw] mt-[5vh] md:mt-[12vh] relative z-30">
                <div data-aos='fade-up' data-aos-delay="2200"><button className='text-[16px] sm:text-[24px] bg-[#1b1b1b] text-white px-[20px] sm:px-[32px] hover:px-[50px] py-[8px] sm:py-[12px] rounded-md cursor-pointer hero-btn-1'>Resume</button></div>
                <div data-aos='fade-up' data-aos-delay="2500"><button className='text-[16px] sm:text-[24px] bg-[transparent] text-[#1b1b1b] px-[20px] sm:px-[32px] hover:px-[50px] py-[8px] sm:py-[12px] rounded-md cursor-pointer hero-btn-2'>Contact</button></div>
              </div>
              <div className="fixed bottom-0 w-[100vw] hidden md:block theImageSection md:flex justify-center" data-aos='fade-up' data-aos-delay="2000"><div className=""><MyImage/></div></div> 
            </div>
          </div>
        </div>
        <div className="bg-[#D2B48C] h-[100vh] relative z-20 flex flex-col justify-center items-center">
          <p className='text-[80px] font-[700] text-white'>Hello</p>
          <p className='text-[60px] font-[700] text-stroke3'>Developer</p>
          
        </div>
      </div>
    </div>
  );
}
