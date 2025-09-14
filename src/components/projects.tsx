
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
import React from 'react'

const Projects = () => {
  return (
    <div className="bg-[#1b1b1b] h-auto relative z-20 px-[4vh] md:px-[10vh] py-[6vh] lg:py-[12vh]">
    <p className='text-[8vh] sm:text-[10vh] font-[700] text-stroke3 pb-[1vh]' data-aos="fade-in" data-aos-delay='300'>Projects</p>  
    
    {/* part */}
        <div className="lg:grid grid-cols-3 gap-[2vh]">
          <div className="col-span-1">


              <div className="shadow-xl bg-gradient-to-t to-[#252525] from-[#202020] w-[100%] p-[0.5vh] rounded-2xl">
                  <div className="flex gap-2 py-[0.8vh] pl-[1vh]">
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                  </div>

                <div className="relative overflow-hidden ProjectCard">
                  <Image
                    src="/RProject-1.png"
                    alt="Abir"
                    width={800}
                    height={800}
                    className="cover h-auto w-auto rounded-xl"
                    />
                    <div className="bg-[#1b1b1be5] cursor-pointer absolute top-0 w-[100%] h-[100%] rounded-xl ProjectCardContent">
                      <div className="h-[100%] w-[100%] p-[2vh]">
                        <p className='text-white text-[16px] md:text-[18px] font-[700]'>DnaBioLab</p>
                        <p className='text-white text-[12px] md:text-[16px] font-[400] pt-[.5vh] text-justify'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corporis. ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati ipsum at quas cupiditate eveniet in? Nemo facere dignissimos animi?</p>
                        <p className='text-white text-[16px] md:text-[18px] pt-[2vh]'>Tech</p>
                        <p className='text-white text-[12px] md:text-[16px] font-[400] pt-[.5vh]'>HTML, CSS, JavaScript, TailwindCSS</p>
                      </div>
                    </div>
                </div>

                  <div className="px-[2vh] py-[1.5vh]">
                    <p className='text-[20px] font-[700] text-[#f0f0f0]'>Aqmarassociate</p>
                    <div className="flex justify-between pt-[1vh]">
                      <p className='text-[14px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
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
                      <div className="relative overflow-hidden ProjectCard">
                        <Image
                          src="/RProject-2.png"
                          alt="Abir"
                          width={800}
                          height={800}
                          className="cover h-auto w-auto rounded-xl "
                          />
                          <div className="bg-[#1b1b1be5] cursor-pointer absolute top-0 w-[100%] h-[100%] rounded-xl ProjectCardContent">
                            <div className="h-[100%] w-[100%] p-[2vh]">
                              <p className='text-white text-[18px] font-[700]'>DnaBioLab</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh] text-justify'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corporis. ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati ipsum at quas cupiditate eveniet in? Nemo facere dignissimos animi?</p>
                              <p className='text-white text-[18px] font-[700] pt-[2vh]'>Tech</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh]'>HTML, CSS, JavaScript, TailwindCSS</p>
                            </div>
                          </div>
                      </div>
                      <div className="px-[2vh] py-[1.5vh]">
                        <p className='text-[20px] font-[700] text-[#f0f0f0]'>WebNest</p>
                        <div className="flex justify-between pt-[1vh]">
                          <p className='text-[14px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
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
                      <div className="relative overflow-hidden ProjectCard">
                        <Image
                          src="/RProject-3.jpeg"
                          alt="Abir"
                          width={800}
                          height={800}
                          className="cover h-auto w-auto rounded-xl "
                          />
                          <div className="bg-[#1b1b1be5] cursor-pointer absolute top-0 w-[100%] h-[100%] rounded-xl ProjectCardContent">
                            <div className="h-[100%] w-[100%] p-[2vh]">
                              <p className='text-white text-[18px] font-[700]'>DnaBioLab</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh] text-justify'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corporis. ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati ipsum at quas cupiditate eveniet in? Nemo facere dignissimos animi?</p>
                              <p className='text-white text-[18px] font-[700] pt-[2vh]'>Tech</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh]'>HTML, CSS, JavaScript, TailwindCSS</p>
                            </div>
                          </div>
                      </div>
                      <div className="px-[2vh] py-[1.5vh]">
                        <p className='text-[20px] font-[700] text-[#f0f0f0]'>Khroch</p>
                        <div className="flex justify-between pt-[1vh]">
                          <p className='text-[14px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
                          <Link href="/contact" className="text-[#d6d6d6] hover:text-[#96eefb] transition-all"><MdArrowOutward /></Link>
                        </div>
                      </div>
              </div>



          </div>
        </div>


    {/* part */}
        <div className="lg:grid grid-cols-3 gap-[2vh] pt-[4vh] lg:pt-[2vh]">
          <div className="col-span-1">


              <div className="shadow-xl bg-gradient-to-t to-[#252525] from-[#202020] w-[100%] p-[0.5vh] rounded-2xl">
                  <div className="flex gap-2 py-[0.8vh] pl-[1vh]">
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                      <p className='bg-[#575757] h-[12px] w-[12px] rounded-[50px]'></p>
                  </div>
                  <div className="relative overflow-hidden ProjectCard">
                        <Image
                          src="/RProject-4.png"
                          alt="Abir"
                          width={800}
                          height={800}
                          className="cover h-auto w-auto rounded-xl "
                          />
                          <div className="bg-[#1b1b1be5] cursor-pointer absolute top-0 w-[100%] h-[100%] rounded-xl ProjectCardContent">
                            <div className="h-[100%] w-[100%] p-[2vh]">
                              <p className='text-white text-[18px] font-[700]'>DnaBioLab</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh] text-justify'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corporis. ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati ipsum at quas cupiditate eveniet in? Nemo facere dignissimos animi?</p>
                              <p className='text-white text-[18px] font-[700] pt-[2vh]'>Tech</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh]'>HTML, CSS, JavaScript, TailwindCSS</p>
                            </div>
                          </div>
                      </div>
                      <div className="px-[2vh] py-[1.5vh]">
                        <p className='text-[20px] font-[700] text-[#f0f0f0]'>DNABioLab</p>
                        <div className="flex justify-between pt-[1vh]">
                          <p className='text-[14px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
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
                      <div className="relative overflow-hidden ProjectCard">
                        <Image
                          src="/RProject-5.png"
                          alt="Abir"
                          width={800}
                          height={800}
                          className="cover h-auto w-auto rounded-xl "
                          />
                          <div className="bg-[#1b1b1be5] cursor-pointer absolute top-0 w-[100%] h-[100%] rounded-xl ProjectCardContent">
                            <div className="h-[100%] w-[100%] p-[2vh]">
                              <p className='text-white text-[18px] font-[700]'>DnaBioLab</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh] text-justify'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corporis. ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati ipsum at quas cupiditate eveniet in? Nemo facere dignissimos animi?</p>
                              <p className='text-white text-[18px] font-[700] pt-[2vh]'>Tech</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh]'>HTML, CSS, JavaScript, TailwindCSS</p>
                            </div>
                          </div>
                      </div>
                      <div className="px-[2vh] py-[1.5vh]">
                        <p className='text-[20px] font-[700] text-[#f0f0f0]'>DarkCoders</p>
                        <div className="flex justify-between pt-[1vh]">
                          <p className='text-[14px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
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
                      <div className="relative overflow-hidden ProjectCard">
                        <Image
                          src="/RProject-6.jpeg"
                          alt="Abir"
                          width={800}
                          height={800}
                          className="cover h-auto w-auto rounded-xl "
                          />
                          <div className="bg-[#1b1b1be5] cursor-pointer absolute top-0 w-[100%] h-[100%] rounded-xl ProjectCardContent">
                            <div className="h-[100%] w-[100%] p-[2vh]">
                              <p className='text-white text-[18px] font-[700]'>DnaBioLab</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh] text-justify'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corporis. ipsum dolor sit amet consectetur adipisicing elit. Similique obcaecati ipsum at quas cupiditate eveniet in? Nemo facere dignissimos animi?</p>
                              <p className='text-white text-[18px] font-[700] pt-[2vh]'>Tech</p>
                              <p className='text-white text-[16px] font-[400] pt-[.5vh]'>HTML, CSS, JavaScript, TailwindCSS</p>
                            </div>
                          </div>
                      </div>
                      <div className="px-[2vh] py-[1.5vh]">
                        <p className='text-[20px] font-[700] text-[#f0f0f0]'>LyronJs</p>
                        <div className="flex justify-between pt-[1vh]">
                          <p className='text-[14px] font-[400] text-[#d6d6d6]'>Developed by next.js</p>
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

