// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const textRef = useRef<HTMLDivElement>(null);
//   const textRefTwo = useRef<HTMLDivElement>(null);
//   const textRefThree = useRef<HTMLDivElement>(null);
//   const textRefFour = useRef<HTMLDivElement>(null);



//   useEffect(() => {
//     if (!textRef.current || !textRefTwo.current || !textRefThree.current || !textRefFour.current) return;

//     gsap.fromTo(
//       textRef.current,
//       { y: '50%', opacity: 0 },
//       {
//         y: '0%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: 'top 80%', // when top of text hits 80% of viewport
//           end: 'top 30%',
//           scrub: true,
//         },
//         ease: 'power2.out',
//       }
//     );


//     gsap.fromTo(
//       textRefTwo.current,
//       { y: '0', opacity: 0 },
//       {
//         y: '30%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: textRefTwo.current,
//           start: 'top 60%', // when top of text hits 80% of viewport
//           end: 'top 30%',
//           scrub: true,
//         },
//         // ease: 'power2.out',
//       }
//     );


//     gsap.fromTo(
//       textRefThree.current,
//       { y: '50%', opacity: 0 },
//       {
//         y: '0%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: textRefThree.current,
//           start: 'top 80%', // when top of text hits 80% of viewport
//           end: 'top 30%',
//           scrub: true,
//         },
//         ease: 'power2.out',
//       }
//     );

//     gsap.fromTo(
//       textRefFour.current,
//       { y: '0', opacity: 0 },
//       {
//         y: '30%',
//         opacity: 1,
//         scrollTrigger: {
//           trigger: textRefFour.current,
//           start: 'top 60%', // when top of text hits 80% of viewport
//           end: 'top 30%',
//           scrub: true,
//         },
//         // ease: 'power2.out',
//       }
//     );



   
//   }, []);

//   return (
//     <div className="h-[200vh] flex justify-center bg-[indigo]">

//       <div
//         ref={textRef}
//         className="text-4xl font-bold text-center bg-[red]"
//       >
//         <div className="">
//             <div className="">
//               <Image
//                 src="/projects-1.jpg"
//                 alt="My Image"
//                 width={500}
//                 height={500}
//                 className="w-[100%] h-[100%] object-cover"
//                 />
//             </div>
//         </div>
//       </div>

//       <div
//         ref={textRefTwo}
//         className="text-4xl font-bold text-center bg-[red]"
//       >
//         This text scrolls in from the left!
//       </div>



//       <div
//         ref={textRefThree}
//         className="text-4xl font-bold text-center bg-[red]"
//       >
//         This text scrolls in from the left!
//       </div>

//       {/* <div
//         ref={textRefFour}
//         className="text-4xl font-bold text-center bg-[red]"
//       >
//         This text scrolls in from the left!
//       </div> */}


//     </div>
//   );
// };

// export default Projects;



import React from 'react'

const projects = () => {
  return (
    <div>
      
    </div>
  )
}

export default projects

