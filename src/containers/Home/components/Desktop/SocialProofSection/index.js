// styled
import {
  StyledSection,
  StyledContainer,
  StyledH5,
  StyledH2,
} from './styled';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SocialProofSection = () => {
  const ref = useRef([]);
  ref.current = [];

  const PRODUCTS = [
    {
      title: 'Emphasis',
      key: 'emphasis',
    },
    {
      title: 'Define',
      key: 'define',
    },
    {
      title: 'Ideate',
      key: 'ideate',
    },
    {
      title: 'Prototype',
      key: 'prototype',
    },
    {
      title: 'Test',
      key: 'test',
    },
    {
      title: 'Repeat',
      key: 'repeat',
    },
  ];

  const animateFrom = (elem, direction) => {
    direction = direction || 1;
    const x = 0;
    const y = -100 * direction;
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = '0';
    gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    });
  };
  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  useLayoutEffect(() => {
    ref.current.forEach((elem) => {
      hide(elem); // assure that the element is hidden when scrolled into view
      ScrollTrigger.create({
        trigger: elem,
        onEnter() { animateFrom(elem); },
        onEnterBack() { animateFrom(elem, -1); },
        onLeave() { hide(elem); }, // assure that the element is hidden when scrolled into view
      });
    });
  }, []);

  return (
    <StyledSection className="main-section">
      <StyledContainer>
        <StyledH5 ref={addToRefs}>
          We rapidly transform ideas into problem-solving products, <br />
          designed to adapt swiftly to the evolving market demands.
        </StyledH5>
        {
          PRODUCTS.map((item) => (
            <StyledH2 ref={addToRefs} key={item.key} className={`gs-reveal ${item.key}`}>{item.title}</StyledH2>
          ))
        }
      </StyledContainer>
    </StyledSection>
  );
};

export default SocialProofSection;
