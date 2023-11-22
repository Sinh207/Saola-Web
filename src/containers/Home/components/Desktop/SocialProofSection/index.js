// styled
import {
  StyledSection,
  StyledContainer,
  StyledH5,
  StyledH2,
} from './styled';
import { useEffect, useRef } from 'react';
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

  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  useEffect(() => {
    ref.current.forEach((el) => {
      gsap.fromTo(el, {
        autoAlpha: 0,
      }, {
        autoAlpha: 1,
        left: 0,
        lazy: true,
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
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
            <StyledH2 ref={addToRefs} key={item.key} className={item.key}>{item.title}</StyledH2>
          ))
        }
      </StyledContainer>
    </StyledSection>
  );
};

export default SocialProofSection;
