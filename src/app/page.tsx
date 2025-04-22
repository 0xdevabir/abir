'use client';
import { Oswald } from 'next/font/google';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '@/components/loader';


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
    <div className={oswald.className}>
      <div className="flex flex-col justify-center mt-[20vh]">
        <p className='text-center text-[5vw] md:text-[1.8vw] font-[300]' data-aos='fade-up' data-aos-delay="1600">👋🏻, my name is Abir and I am a Freelancer</p>
        <div className="leading-[12vh] md:leading-[18vh]">
          <p className='text-center text-[15vw] md:text-[10vw] font-[700] cursor-pointer text-stroke1 z-20' data-aos='fade-right' data-aos-delay="1600">Webdeveloper</p>
          <p className='text-center text-[15vw] md:text-[10vw] font-[700] text-stroke2 cursor-pointer z-10' data-aos='fade-left' data-aos-delay="1600">& <span className='sm:hidden'> <br className='sm:hidde' /> </span> App Developer</p>
        </div>
        <div className="flex justify-center gap-[5vw] sm:gap-[1vw] mt-[5vh] md:mt-[12vh]">
          <button className='text-[16px] sm:text-[24px] bg-[#1b1b1b] text-white px-[20px] sm:px-[32px] py-[8px] sm:py-[12px] rounded-md cursor-pointer hero-btn-1' data-aos='fade-up' data-aos-delay="2200">Resume</button>
          <button className='text-[16px] sm:text-[24px] bg-[white] text-[#1b1b1b] px-[20px] sm:px-[32px] py-[8px] sm:py-[12px] rounded-md cursor-pointer hero-btn-2' data-aos='fade-up' data-aos-delay="2500">Contact</button>
        </div>
      </div>
    </div>
   </div>
  );
}
