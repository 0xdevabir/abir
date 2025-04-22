'use client';
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle the menu state (open/close)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Control navbar visibility based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } 
      // Hide navbar when scrolling down and not at the top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', controlNavbar);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
   <div className="">
     <nav className={`
        bg-transparent w-full z-30 text-[#1b1b1b] p-[12px] sm:p-[6px] 
        transition-all duration-300
        ${showNavbar ? 'fixed top-0 left-0' : 'absolute transform -translate-y-full'}
        ${lastScrollY > 100 && showNavbar ? 'bg-transparent' : ''}
      `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-[8vw] sm:text-[4vw] font-bold z-20">
            <svg
            viewBox="200 -25 190 180"
            xmlns="http://www.w3.org/2000/svg"
            className={`looka-1j8o68f w-[200px] h-[60px] md:hidden ${isMenuOpen ? 'text-white' : 'text-[#1b1b1b]'}`}
          >
            <g transform="matrix(6.5,0,0,6.5,5,-13)">
              {/* <!-- A --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M3.5 13.3 l1.9 -0.04 l-0.16 -4.78 l-1.8 -0.5 l0 0.88 c-0.08 0.5 -0.12 1.16 -0.14 1.66 l0 1.54 l0 0.8 z M1.16 5.4 l2.52 -0.22 l1.94 0.02 l0.72 0 l0.3 0.94 l0.66 6.46 l0.66 7.48 l-2 -0.06 l-0.3 -0.12 l-0.18 -4.48 l-2.04 0.12 l0.24 4.42 l-0.54 0 l-2.28 0 l-0.58 -0.06 l0.24 -8.96 z" />

              {/* <!-- B --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M8.5 5.3 l2.6 -0.1 q1.4 0 2.1 0.5 t0.7 1.2 q0 0.6 -0.4 1 t-1.1 0.6 q0.7 0.2 1.2 0.6 t0.5 1.2 q0 0.8 -0.8 1.4 t-2.2 0.6 h-2.5 l-0.1 -7 z m1.6 1.3 v1.4 h0.9 q0.9 0 0.9 -0.7 q0 -0.7 -0.9 -0.7 h-0.9 z m0.1 2.8 v1.4 h1 q0.9 0 0.9 -0.75 q0 -0.75 -0.9 -0.75 h-1 z" />

              {/* <!-- I --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M15.3 5.3 h2 v7 h-2 z" />

              {/* <!-- R --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M19.5 5.3 h2.3 q1.2 0 1.7 0.5 t0.5 1.3 q0 0.7 -0.4 1.1 t-1.1 0.5 q0.3 0.2 0.6 0.7 l1 3.2 h-2.1 l-0.9 -2.8 h-0.6 v2.8 h-2 v-7.3 z m1.7 1.3 v1.2 h0.6 q0.9 0 0.9 -0.6 q0 -0.6 -0.9 -0.6 h-0.6 z" />
            </g>
          </svg>

          <svg
            viewBox="50 -35 190 200"
            xmlns="http://www.w3.org/2000/svg"
            className={`looka-1j8o68f w-[200px] h-[120px] hidden md:block ${isMenuOpen ? 'text-white' : 'text-[#1b1b1b]'}`}
          >
            <g transform="matrix(6.5,0,0,6.5,5,-13)">
              {/* <!-- A --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M3.5 13.3 l1.9 -0.04 l-0.16 -4.78 l-1.8 -0.5 l0 0.88 c-0.08 0.5 -0.12 1.16 -0.14 1.66 l0 1.54 l0 0.8 z M1.16 5.4 l2.52 -0.22 l1.94 0.02 l0.72 0 l0.3 0.94 l0.66 6.46 l0.66 7.48 l-2 -0.06 l-0.3 -0.12 l-0.18 -4.48 l-2.04 0.12 l0.24 4.42 l-0.54 0 l-2.28 0 l-0.58 -0.06 l0.24 -8.96 z" />

              {/* <!-- B --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M8.5 5.3 l2.6 -0.1 q1.4 0 2.1 0.5 t0.7 1.2 q0 0.6 -0.4 1 t-1.1 0.6 q0.7 0.2 1.2 0.6 t0.5 1.2 q0 0.8 -0.8 1.4 t-2.2 0.6 h-2.5 l-0.1 -7 z m1.6 1.3 v1.4 h0.9 q0.9 0 0.9 -0.7 q0 -0.7 -0.9 -0.7 h-0.9 z m0.1 2.8 v1.4 h1 q0.9 0 0.9 -0.75 q0 -0.75 -0.9 -0.75 h-1 z" />

              {/* <!-- I --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M15.3 5.3 h2 v7 h-2 z" />

              {/* <!-- R --> */}
              <path className={`${isMenuOpen ? 'fill-white' : 'fill-[#1b1b1b]'}`} d="M19.5 5.3 h2.3 q1.2 0 1.7 0.5 t0.5 1.3 q0 0.7 -0.4 1.1 t-1.1 0.5 q0.3 0.2 0.6 0.7 l1 3.2 h-2.1 l-0.9 -2.8 h-0.6 v2.8 h-2 v-7.3 z m1.7 1.3 v1.2 h0.6 q0.9 0 0.9 -0.6 q0 -0.6 -0.9 -0.6 h-0.6 z" />
            </g>
          </svg>
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-10 text-[20px] font-[600]">
          <Link href="/" className="hover:text-[#96eefb] transition-all">Home</Link>
          <Link href="/about" className="hover:text-[#96eefb] transition-all">About</Link>
          <Link href="/projects" className="hover:text-[#96eefb] transition-all">Projects</Link>
          <Link href="/blog" className="hover:text-[#96eefb] transition-all">Blog</Link>
          <Link href="/contact" className="hover:text-[#96eefb] transition-all">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col justify-between items-center space-y-2 w-8 h-8 cursor-pointer relative z-20"
          onClick={toggleMenu}
        >
          <div
            className={`w-8 h-1 bg-[black] rounded-full transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : ''}`}
          ></div>
          <div
            className={`w-8 h-1 bg-[black] rounded-full transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
          ></div>
          <div
            className={`w-8 h-1 bg-[black] rounded-full transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`z-10 md:hidden fixed inset-0 bg-[#1b1b1b] bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${
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
    </nav>
   </div>
  );
}