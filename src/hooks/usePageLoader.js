import gsap from 'gsap';

const usePageLoader = () => {
  const onPageLoader = () => {
    gsap.set('.hero-section, .main-section', {
      y: '100%',
    });
    const loadCompleteTl = gsap.timeline();
    loadCompleteTl
      .to(
        '.hero-section',
        {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 1,
          delay: 0.3,
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
          delay: 0.4,
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
          delay: 0.5,
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
