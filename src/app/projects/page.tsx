'use client';
// import { useEffect, useState } from 'react';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Loadertwo from '@/components/loadertwo';
import Image from 'next/image';

export default function Projects() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   AOS.init({
  //             duration: 1000, // Animation duration in ms
  //             easing: 'ease-in-out', // Easing type
  //             once: false, // Animation happens only once
  //           });
  //   // Set loading to false after 2.5 seconds to show the main contact page
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500); // 2.5 seconds delay

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    // <div className="">
    //   <Loadertwo/>
      
              
    //         <div className="flex justify-center h-[100vh] items-center">
    //           <div className="">
    //               <div className="flex justify-center">
    //                 <Image src="/maintenance.png" alt="Logo" width={200} height={200} className="mb-4" />
    //               </div>
    //              <h1 className="text-4xl font-extrabold text-gray-800" >In Maintenance</h1>
    //           </div>
    //         </div>
    // </div>
    <div className="">
          <Loadertwo/>
    
            
          <div className="flex justify-center h-[100vh] items-center">
            <div className="" data-aos="fade-up">
                <div className="flex justify-center">
                  <Image src="/maintenance.png" alt="Logo" width={200} height={200} className="mb-4" />
                </div>
               <h1 className="text-4xl font-extrabold text-gray-800" >In Maintenance</h1>
            </div>
          </div>
    </div>
  );
}
