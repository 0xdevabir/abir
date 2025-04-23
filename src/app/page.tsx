'use client';
import { Oswald } from 'next/font/google';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '@/components/loader';
import MyImage from '@/components/myimage';
import Image from 'next/image';
import CountUp from '@/components/countup';
import Techstack from '@/components/techstack';


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

        {/* A B O U T */}
        <div className="bg-[#D2B48C] h-auto xl:h-[100vh] relative z-20 px-[4vh] md:px-[10vh] py-[6vh]">
          <p className='text-[8vh] sm:text-[10vh] font-[700] text-stroke3'>About Me</p>

          <div className="lg:grid grid-cols-5 gap-[1vw]">
            <div className="col-span-3 p-[4vh] md:p-[5vh] rounded-xl shadow-lg bg-[#5A4B3C]">
              <p className='text-[16px] md:text-[22px] font-[500] text-[#F5F5F5]'>Hi, I’m Abir!</p>  
              <p className='text-[16px] md:text-[22px] font-[500] text-[#F5F5F5] pt-[2vh]'>I’m a web developer who loves creating clean, fast, and user-friendly websites. I specialize in building web apps with Next.js, focusing on performance, design, and making sure everything works smoothly for users.</p>  
              <p className='text-[16px] md:text-[22px] font-[500] text-[#F5F5F5] pt-[2vh]'>I’m also the founder of WebNest, where I help businesses and brands turn their ideas into functional and beautiful digital products. If you’ve got a project in mind, I’d love to bring it to life!</p>  
            </div>
            <div className="col-span-2 p-[5vh] rounded-xl shadow-lg bg-[#5A4B3C] flex justify-center items-center mt-[4vh] lg:mt-0">
              <Image
                src="/abir.png"
                alt="Abir"
                width={300}
                height={300}
                className="rounded-[500px] shadow-lg hover:scale-105 transition-transform duration-300"
                // data-aos='fade-up' 
                // data-aos-delay="2000"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-5 gap-[1vw] mt-[1.5vh]">
              <div className="col-span-2 md:col-span-1 p-[5vh] rounded-xl shadow-lg bg-[#5A4B3C] flex justify-center items-center">
                <div className="text-center">
                  <p className='text-[6vh] font-[700] text-[#F5F5F5]'> <CountUp end={60} duration={2000}/>+</p>
                  <p className='text-[18px] md:text-[20px] lg:text-[22px] font-[500] text-[#F5F5F5]'>Completed <br /> Projects</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 p-[5vh] rounded-xl shadow-lg bg-[#5A4B3C] flex justify-center items-center">
                  <div className="text-center">
                    <p className='text-[6vh] font-[700] text-[#F5F5F5]'> <CountUp end={7} duration={1000}/>+</p>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] font-[500] text-[#F5F5F5]'>Freelance <br /> Years</p>
                  </div>
              </div>
              <div className="col-span-2 md:col-span-1 p-[5vh] rounded-xl shadow-lg bg-[#5A4B3C] flex justify-center items-center">
                  <div className="text-center">
                    <p className='text-[6vh] font-[700] text-[#F5F5F5]'> <CountUp end={25} duration={1000}/>+</p>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] font-[500] text-[#F5F5F5]'>Clients <br /> Served</p>
                  </div>
              </div>
              <div className="col-span-2 md:col-span-2 pt-[3vh] rounded-xl shadow-lg bg-[#5A4B3C] flex justify-center">
                  <div className="w-[100%] overflow-hidden text-center">
                    <p className='text-[18px] md:text-[20px] lg:text-[22px] font-[500] text-[#F5F5F5]'>My Tech Stack</p>
                     
                    <div className="overflow-hidden pt-[3vh] md:pt-[4vh] lg:pt-[5vh]"><Techstack/></div>
                  </div>
              </div>
          </div>
          {/* <p className='text-[26px] font-[500] text-[#1c1c1c] w-[40vw] pt-[2vh]'>Hi, I’m Abir! I’m a web developer who loves creating clean, fast, and user-friendly websites. I specialize in building web apps with Next.js, focusing on performance, design, and making sure everything works smoothly for users.</p>
          <p className='text-[26px] font-[500] text-[#1C1C1C] w-[40vw] pt-[2vh]'>I’m also the founder of WebNest, where I help businesses and brands turn their ideas into functional and beautiful digital products. If you’ve got a project in mind, I’d love to bring it to life!</p>
          <div data-aos='fade-up' className='pt-[4vh]'><button className='text-[16px] sm:text-[24px] bg-[transparent] text-[#1b1b1b] px-[20px] sm:px-[32px] py-[8px] sm:py-[12px] rounded-md cursor-pointer hero-btn-2'>Explore My Journey</button></div> */}

        </div>

        {/* N E X T */}

        <div className="bg-[#E50914] h-[100vh] relative z-20 flex flex-col justify-center items-center">
          <p className='text-[80px] font-[700] text-white'>Hello</p>
          <p className='text-[60px] font-[700] text-stroke3'>Developer</p>
        </div>


        <div className="bg-[#5D737E] h-[100vh] relative z-20 flex flex-col justify-center items-center">
          <p className='text-[80px] font-[700] text-white'>Hello</p>
          <p className='text-[60px] font-[700] text-stroke3'>Developer</p>
        </div>

      </div>
    </div>
  );
}
