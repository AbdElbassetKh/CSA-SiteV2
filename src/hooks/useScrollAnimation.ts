import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export function useScrollAnimation(): [any, AnimationControls] {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
}