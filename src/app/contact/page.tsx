'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Contact() {
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
    }, 2000); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1b1b1b]">
      {/* Initial "Hello" message */}
      {isLoading ? (
        <div className="text-[40px] sm:text-[70px] font-[900] text-center opacity-100 transition-opacity duration-1000 text-white" data-aos="fade-up">
          <Image 
                src="/hello.png" 
                alt="Contact Image" 
                width={160} 
                height={150} 
                className="mx-auto mt-4 rounded-lg shadow-lg" />
          {/* <h1 className='text-[250px] md:text-[60px] text-[gray]'>Let’s start a great story.</h1> */}
          </div>
      ) : (
        // Main Contact Form or content
        <div className="text-center">
          <div className="" data-aos="fade-up">
                          <div className="flex justify-center">
                            <Image src="/maintenance.png" alt="Logo" width={200} height={200} className="mb-4" />
                          </div>
                         <h1 className="text-4xl font-extrabold text-[white]" >In Maintenance</h1>
          </div>
        </div>
      )}
    </div>
  );
}
