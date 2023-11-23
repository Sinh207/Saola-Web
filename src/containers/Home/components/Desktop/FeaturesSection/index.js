import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

// styled
import {
  StyledSection,
  StyledBackgroundTitle,
  StyledContainer,
  StyledItem,
  StyledContent,
  StyledImage,
  StyledH5,
  StyledSpan,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FEATURES_LIST } from '@containers/Home/constant';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const ref = useRef([]);
  ref.current = [];

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

  useEffect(() => {
    FEATURES_LIST.forEach((item) => (
      lottie.loadAnimation({
        container: document.querySelector(`#lottie-${item.class}`),
        renderer: 'svg',
        autoplay: true,
        path: item.lottie,
      })
    ));
  }, []);

  return (
    <StyledSection className="home-features-section">
      <StyledBackgroundTitle
        style={{
          backgroundImage: `url(${IMAGE_CONST.home.backgroundFeaturesTitle})`,
        }}
        ref={addToRefs}
      >
        <h2>
          Our culture, mantra, <br /> and beliefs
        </h2>
      </StyledBackgroundTitle>
      <StyledContainer className="container">
        {
          FEATURES_LIST.map((item, idx) => (
            <StyledItem ref={addToRefs} key={idx} className={item.class}>
               <img
                src={item.image}
                alt={item.title}
                width={204}
                height={204}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
               />
              {/* <div id={`lottie-${item.class}`} /> */}
              <StyledContent>
                <StyledH5>{item.title}</StyledH5>
                <StyledSpan>{item.des}</StyledSpan>
              </StyledContent>
            </StyledItem>
          ))
        }
      </StyledContainer>
    </StyledSection>
  );
};

export default FeaturesSection;
