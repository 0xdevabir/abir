import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loadertwo() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-50 overflow-hidden flex items-center justify-center"
          exit={{ opacity: 0 }}
        >
          {/* Logo */}
          <motion.div
            className="z-20 flex items-center justify-center hidden"
            initial={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ 
              opacity: [1, 1, 0],
              y: [0, 0, -100],
              scale: 1
            }}
            transition={{ 
              duration: 1.4,
              times: [0, 0.7, 1],
              ease: [0.76, 0, 0.24, 1],
              delay: 1.5
            }}
          >
            <svg
              width="300"
              height="120"
              viewBox="0 0 90 137"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <g transform="matrix(6.5,0,0,6.5,5,-13)" fill="#fcfcfc">
                {/* A */}
                <path d="M3.5 13.3 l1.9 -0.04 l-0.16 -4.78 l-1.8 -0.5 l0 0.88 c-0.08 0.5 -0.12 1.16 -0.14 1.66 l0 1.54 l0 0.8 z M1.16 5.4 l2.52 -0.22 l1.94 0.02 l0.72 0 l0.3 0.94 l0.66 6.46 l0.66 7.48 l-2 -0.06 l-0.3 -0.12 l-0.18 -4.48 l-2.04 0.12 l0.24 4.42 l-0.54 0 l-2.28 0 l-0.58 -0.06 l0.24 -8.96 z" />
                {/* B */}
                <path d="M8.5 5.3 l2.6 -0.1 q1.4 0 2.1 0.5 t0.7 1.2 q0 0.6 -0.4 1 t-1.1 0.6 q0.7 0.2 1.2 0.6 t0.5 1.2 q0 0.8 -0.8 1.4 t-2.2 0.6 h-2.5 l-0.1 -7 z m1.6 1.3 v1.4 h0.9 q0.9 0 0.9 -0.7 q0 -0.7 -0.9 -0.7 h-0.9 z m0.1 2.8 v1.4 h1 q0.9 0 0.9 -0.75 q0 -0.75 -0.9 -0.75 h-1 z" />
                {/* I */}
                <path d="M15.3 5.3 h2 v7 h-2 z" />
                {/* R */}
                <path d="M19.5 5.3 h2.3 q1.2 0 1.7 0.5 t0.5 1.3 q0 0.7 -0.4 1.1 t-1.1 0.5 q0.3 0.2 0.6 0.7 l1 3.2 h-2.1 l-0.9 -2.8 h-0.6 v2.8 h-2 v-7.3 z m1.7 1.3 v1.2 h0.6 q0.9 0 0.9 -0.6 q0 -0.6 -0.9 -0.6 h-0.6 z" />
              </g>
            </svg>
            <svg
              width="180"
              height="90"
              viewBox="-200 -200 90 337"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden"
            >
              <g transform="matrix(6.5,0,0,6.5,5,-13)" fill="#fcfcfc">
                {/* A */}
                <path d="M3.5 13.3 l1.9 -0.04 l-0.16 -4.78 l-1.8 -0.5 l0 0.88 c-0.08 0.5 -0.12 1.16 -0.14 1.66 l0 1.54 l0 0.8 z M1.16 5.4 l2.52 -0.22 l1.94 0.02 l0.72 0 l0.3 0.94 l0.66 6.46 l0.66 7.48 l-2 -0.06 l-0.3 -0.12 l-0.18 -4.48 l-2.04 0.12 l0.24 4.42 l-0.54 0 l-2.28 0 l-0.58 -0.06 l0.24 -8.96 z" />
                {/* B */}
                <path d="M8.5 5.3 l2.6 -0.1 q1.4 0 2.1 0.5 t0.7 1.2 q0 0.6 -0.4 1 t-1.1 0.6 q0.7 0.2 1.2 0.6 t0.5 1.2 q0 0.8 -0.8 1.4 t-2.2 0.6 h-2.5 l-0.1 -7 z m1.6 1.3 v1.4 h0.9 q0.9 0 0.9 -0.7 q0 -0.7 -0.9 -0.7 h-0.9 z m0.1 2.8 v1.4 h1 q0.9 0 0.9 -0.75 q0 -0.75 -0.9 -0.75 h-1 z" />
                {/* I */}
                <path d="M15.3 5.3 h2 v7 h-2 z" />
                {/* R */}
                <path d="M19.5 5.3 h2.3 q1.2 0 1.7 0.5 t0.5 1.3 q0 0.7 -0.4 1.1 t-1.1 0.5 q0.3 0.2 0.6 0.7 l1 3.2 h-2.1 l-0.9 -2.8 h-0.6 v2.8 h-2 v-7.3 z m1.7 1.3 v1.2 h0.6 q0.9 0 0.9 -0.6 q0 -0.6 -0.9 -0.6 h-0.6 z" />
              </g>
            </svg>
          </motion.div>

          {/* Background */}
          <motion.div 
            className="absolute inset-0 bg-[white]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />

          {/* Curved reveal overlay */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[120vw] bg-[#1B1B1B] origin-bottom"
            style={{
              borderBottomLeftRadius: "0% 0%",
              borderBottomRightRadius: "0% 0%"
            }}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ 
              duration: 1.6,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.4
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}