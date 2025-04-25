
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
import React from 'react'

const Projects = () => {
  return (
    <div className="bg-[#1b1b1b] h-auto relative z-20 px-[4vh] md:px-[10vh] py-[6vh] lg:py-[12vh]">
    <p className='text-[8vh] sm:text-[10vh] font-[700] text-stroke3 pb-[1vh]' data-aos="fade-in" data-aos-delay='300'>Projects</p>  
    
    {/* part */}
        <div className="lg:grid grid-cols-2 gap-[10vh]">
          <div className="col-span-1">


              <div className="shadow-xl bg-gradient-to-t to-[#252525] from-[#202020] w-[100%] p-[0.5vh] rounded-2xl">
                  <div className="flex gap-2 py-[0.8vh] pl-[1vh]">
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                  </div>
                <Image
                  src="/projects-1.jpg"
                  alt="Abir"
                  width={800}
                  height={800}
                  className="cover h-auto w-auto rounded-xl"
                  />
                  <div className="p-[2vh]">
                    <p className='text-[24px] font-[700] text-[#f0f0f0]'>Coders World</p>
                    <div className="flex justify-between pt-[1vh]">
                      <p className='text-[16px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
                      <Link href="/contact" className="text-[#d6d6d6] hover:text-[#96eefb] transition-all"><MdArrowOutward /></Link>
                    </div>
                  </div>
              </div>


          </div>
          <div className="col-span-1 mt-[4vh] lg:mt-0">


              <div className="shadow-xl bg-gradient-to-t to-[#252525] from-[#202020] w-[100%] p-[0.5vh] rounded-2xl">
                      <div className="flex gap-2 py-[0.8vh] pl-[1vh]">
                          <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                          <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                          <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      </div>
                    <Image
                      src="/projects-1.jpg"
                      alt="Abir"
                      width={800}
                      height={800}
                      className="cover h-auto w-auto rounded-xl"
                      />
                      <div className="p-[2vh]">
                        <p className='text-[24px] font-[700] text-[#f0f0f0]'>Coders World</p>
                        <div className="flex justify-between pt-[1vh]">
                          <p className='text-[16px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
                          <Link href="/contact" className="text-[#d6d6d6] hover:text-[#96eefb] transition-all"><MdArrowOutward /></Link>
                        </div>
                      </div>
              </div>



          </div>
        </div>


    {/* part */}
        <div className="lg:grid grid-cols-2 gap-[10vh] pt-[4vh] lg:pt-[10vh]">
          <div className="col-span-1">


              <div className="shadow-xl bg-gradient-to-t to-[#252525] from-[#202020] w-[100%] p-[0.5vh] rounded-2xl">
                  <div className="flex gap-2 py-[0.8vh] pl-[1vh]">
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                  </div>
                <Image
                  src="/projects-1.jpg"
                  alt="Abir"
                  width={800}
                  height={800}
                  className="cover h-auto w-auto rounded-xl"
                  />
                  <div className="p-[2vh]">
                    <p className='text-[24px] font-[700] text-[#f0f0f0]'>Coders World</p>
                    <div className="flex justify-between pt-[1vh]">
                      <p className='text-[16px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
                      <Link href="/contact" className="text-[#d6d6d6] hover:text-[#96eefb] transition-all"><MdArrowOutward /></Link>
                    </div>
                  </div>
              </div>


          </div>
          <div className="col-span-1 mt-[4vh] lg:mt-0">


              <div className="shadow-xl bg-gradient-to-t to-[#252525] from-[#202020] w-[100%] p-[0.5vh] rounded-2xl">
                      <div className="flex gap-2 py-[0.8vh] pl-[1vh]">
                          <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                          <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                          <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      </div>
                    <Image
                      src="/projects-1.jpg"
                      alt="Abir"
                      width={800}
                      height={800}
                      className="cover h-auto w-auto rounded-xl"
                      />
                      <div className="p-[2vh]">
                        <p className='text-[24px] font-[700] text-[#f0f0f0]'>Coders World</p>
                        <div className="flex justify-between pt-[1vh]">
                          <p className='text-[16px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
                          <Link href="/contact" className="text-[#d6d6d6] hover:text-[#96eefb] transition-all"><MdArrowOutward /></Link>
                        </div>
                      </div>
              </div>



          </div>
        </div>

  </div>
  )
}

export default Projects;

