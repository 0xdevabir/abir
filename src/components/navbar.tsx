'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
// import Image from "next/image";
// import logo from "../../../public/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu state (open/close)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
   <div className="">
     <nav className="bg-transparent absolute top-0 left-0 w-full z-30 text-white p-[12px] sm:p-[0px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-[8vw] sm:text-[4vw] font-bold z-20">
            <Image
              src="/logo-bgr.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-[80px] sm:w-[120px] h-auto object-cover"
            />
             {/* <svg className="w-[50px] sm:w-[80px] h-auto" width="112.5995666058394" height="171.40156249999998" viewBox="0 0 90 137" class="looka-1j8o68f"> <defs id="SvgjsDefs1011"></defs> <g id="SvgjsG1013" featurekey="q4o0QG-0" transform="matrix(6.510416812185822,0,0,6.510416812185822,18.177085419107897,-13.723961073944096)" fill="#fcfcfc"> <path d="M3.5 13.3 l1.9 -0.04 l-0.16 -4.78 l-1.8 -0.5 l0 0.88 c-0.08 0.5 -0.12 1.16 -0.14 1.66 l0 1.54 l0 0.8 z M1.16 5.4 l2.52 -0.22 l1.94 0.02 l0.72 0 l0.3 0.94 l0.66 6.46 l0.66 7.48 l-2 -0.06 l-0.3 -0.12 l-0.18 -4.48 l-2.04 0.12 l0.24 4.42 l-0.54 0 l-2.28 0 l-0.58 -0.06 l0.24 -8.96 z"></path></g></svg> */}

        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-10 text-[20px] font-[600]">
          <Link href="/" className="hover:text-[#96eefb] transition-all">Home</Link>
          <Link href="/about" className="hover:text-[#96eefb] transition-all">About</Link>
          <Link href="/projects" className="hover:text-[#96eefb] transition-all">Projects</Link>
          {/* <Link href="/portfolio" className="hover:text-[#96eefb] transition-all">Portfolio</Link> */}
          <Link href="/blog" className="hover:text-[#96eefb] transition-all">Blog</Link>
          <Link href="/contact" className="hover:text-[#96eefb] transition-all">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col justify-between items-center space-y-2 w-8 h-8 cursor-pointer relative z-20"
          onClick={toggleMenu}
        >
          <div
            className={`w-8 h-1 bg-white rounded-full transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded-full transition duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded-full transform transition duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`z-10 md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
  className={`z-10 md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}
>
  <Link
    href="/"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-100"
  >
    Home
  </Link>
  <Link
    href="/about"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-200"
  >
    About
  </Link>
  <Link
    href="/projects"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-300"
  >
    Projects
  </Link>
  {/* <Link
    href="/porfolio"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-300"
  >
    Portfolio
  </Link> */}
  <Link
    href="/blog"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-400"
  >
    Blog
  </Link>
  <Link
    href="/contact"
    onClick={() => setIsMenuOpen(false)}
    className="text-[20px] font-[600] text-white py-2 hover:text-[#96eefb] transition-all duration-300 delay-500"
  >
    Contact
  </Link>
</div>

      </div>
    </nav>
   </div>
  );
}
