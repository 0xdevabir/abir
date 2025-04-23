// TechStackCarousel.tsx
import React from 'react';
import Image from 'next/image';

// You can add/modify the tech stack items as needed
const techStackItems = [
  { name: 'HTML5', iconSrc: '/icons/html-5.png' },
  { name: 'CSS3', iconSrc: '/icons/css-3.png' },
  { name: 'JavaScript', iconSrc: '/icons/java-script.png' },
  { name: 'TypeScript', iconSrc: '/icons/typescript.png' },
  { name: 'React', iconSrc: '/icons/react.png' },
//   { name: 'Next.js', iconSrc: '/icons/nextjs.svg' },
//   { name: 'TailwindCss', iconSrc: '/icons/nextjs.svg' },
  { name: 'Node.js', iconSrc: '/icons/node-js.png' },
//   { name: 'Vercel', iconSrc: '/icons/typescript.svg' },
  { name: 'Git', iconSrc: '/icons/github-sign.png' },
  { name: 'Figma', iconSrc: '/icons/figma.png' },

];

const Techstack: React.FC = () => {
  return (
    <div className="tech-stack-section">
      {/* <h2 className="section-title">My Tech Stack</h2> */}
      
      <div className="tech-stack-container">
        <div className="tech-stack-scroll">
          {/* First set of icons */}
          <div className="tech-stack-scroll-inner">
            {techStackItems.map((tech, index) => (
              <div key={`tech-1-${index}`} className="tech-icon">
                <Image src={tech.iconSrc} alt={tech.name} width={60} height={60} className='w-[50px] sm:w-[60px] h-[50px] sm:h-[60px]' />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless infinite scrolling */}
          <div className="tech-stack-scroll-inner">
            {techStackItems.map((tech, index) => (
              <div key={`tech-2-${index}`} className="tech-icon">
                <Image src={tech.iconSrc} alt={tech.name} width={60} height={60} className='w-[50px] sm:w-[60px] h-[50px] sm:h-[60px]' />
              </div>
            ))}
          </div>

          {/* First set of icons */}
          <div className="tech-stack-scroll-inner">
            {techStackItems.map((tech, index) => (
              <div key={`tech-1-${index}`} className="tech-icon">
                <Image src={tech.iconSrc} alt={tech.name} width={60} height={60} className='w-[50px] sm:w-[60px] h-[50px] sm:h-[60px]' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techstack;