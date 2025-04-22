import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ImageCursorDiv() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Calculate mouse position as percentage from center
      const percentX = (e.clientX - viewportWidth / 2) / (viewportWidth / 2);
      const percentY = (e.clientY - viewportHeight / 2) / (viewportHeight / 2);
      
      setPosition({ x: percentX, y: percentY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate transform based on cursor position
  const rotateX = position.y * -10; // Rotation effect
  const rotateY = position.x * 10;  // Rotation effect
  
  // Add subtle position shift (translate) effect
  const translateX = position.x * 20; // Move up to 20px left/right
  const translateY = position.y * 20; // Move up to 20px up/down
  
  return (
    <div className="w-fit flex items-center justify-center bg-transparent relative z-[5]">
      <div 
        className="w-auto h-[57vh] bg-transparent rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`
        }}
      >
       
        <Image
            src="/abir-animated-rb.png"
            alt="abir-animated-rb.png" 
            width={500}
            height={500}
            className="w-full h-full object-cover z-[5] "
            />
      </div>
    </div>
  );
}