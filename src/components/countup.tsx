'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type CountUpProps = {
  end: number;
  duration?: number; // in ms
};

export default function CountUp({ end, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      let start = 0;
      const increment = Math.ceil(duration / end);

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(counter);
        }
      }, increment);
    }
  }, [inView, hasStarted, end, duration]);

  return <span ref={ref}>{count}</span>;
}
