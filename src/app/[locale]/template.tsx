'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

// The first render of a visit is server-rendered and must be visible in the HTML
// (LCP, non-JS crawlers). Only later client-side navigations play the entrance animation.
let hasMounted = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const animateIn = hasMounted;
  useEffect(() => {
    hasMounted = true;
  }, []);

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 15 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.4
      }}
    >
      {children}
    </motion.div>
  );
}
