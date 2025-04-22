'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '@/components/loader';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="">
      <Loader/>
      <div className="fixed top-0 left-0 w-full h-full bg-[white] z-0 flex items-center justify-center" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-gray-800" >WebNest</h1>
      </div>
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-5xl font-bold">Welcome to WebNest</h1>
    </main>
    </div>







    // <div className="min-h-screen flex flex-col items-center justify-center bg-[#1B1B1B] hidden">
    //   {/* Initial "Hello" message */}
    //   {isLoading ? (
    //     <div className="text-[40px] sm:text-[70px] font-[900] text-center opacity-100 transition-opacity duration-1000 text-white" data-aos="fade-up">
    //       {/* <h1 className='text-[250px] md:text-[400px] text-[gray]'>wn</h1> */}
    //       <svg width="112.5995666058394" height="171.40156249999998" viewBox="0 0 90 137" className="looka-1j8o68f"> <defs id="SvgjsDefs1011"></defs> <g id="SvgjsG1013" transform="matrix(6.510416812185822,0,0,6.510416812185822,18.177085419107897,-13.723961073944096)" fill="#fcfcfc"> <path d="M3.5 13.3 l1.9 -0.04 l-0.16 -4.78 l-1.8 -0.5 l0 0.88 c-0.08 0.5 -0.12 1.16 -0.14 1.66 l0 1.54 l0 0.8 z M1.16 5.4 l2.52 -0.22 l1.94 0.02 l0.72 0 l0.3 0.94 l0.66 6.46 l0.66 7.48 l-2 -0.06 l-0.3 -0.12 l-0.18 -4.48 l-2.04 0.12 l0.24 4.42 l-0.54 0 l-2.28 0 l-0.58 -0.06 l0.24 -8.96 z"></path></g></svg>

    //       </div>
    //   ) : (
    //     // Main Contact Form or content
    //     <div className="text-center">
    //       <p className='text-[80px] font-[800] text-white' data-aos="fade-up">About</p>
    //     </div>
    //   )}
    // </div>
  );
}
