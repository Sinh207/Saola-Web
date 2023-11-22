import { useEffect } from 'react';
import gsap from 'gsap';

const usePageLoader = () => {
  const onPageLoader = () => {
    gsap.set('.hero-section, .main-section', {
      y: '100%',
    });
    const loadCompleteTl = gsap.timeline();
    loadCompleteTl
      .to(
        'section:nth-child(1)',
        {
          y: '-100%',
          delay: 0.4,
        },
      )
      .to(
        '.hero-section',
        {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: 'Power3.easeOut',
        },
        0,
      )
      .to(
        '.main-section',
        {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 1,
          delay: 0.8,
          ease: 'Power3.easeOut',
        },
        0,
      )
      .to(
        '.footer',
        {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 1.5,
          delay: 0.8,
          ease: 'Power3.easeOut',
        },
        0,
      );
  };

  return {
    onPageLoader,
  };
};

export { usePageLoader };
