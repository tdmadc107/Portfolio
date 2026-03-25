// Example of a custom React hook

import React from 'react';
import { useEffect, useState } from 'react';

/**
 * Hook to detect if element is in viewport
 * @returns { isInView, ref } - Object with boolean and ref
 */
export const useInViewport = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { isInView, ref };
};
