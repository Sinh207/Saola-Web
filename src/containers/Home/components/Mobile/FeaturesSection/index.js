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

import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FEATURES_LIST } from '@containers/Home/constant';

const FeaturesSection = () => {
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
    <StyledSection>
      <StyledBackgroundTitle
        style={{
          backgroundImage: `url(${IMAGE_CONST.home.backgroundFeaturesTitle})`,
        }}
      >
        <h2>
          Our culture, mantra, <br /> and beliefs
        </h2>
      </StyledBackgroundTitle>
      <StyledContainer className="container">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={16}
          freeMode
          lazy
          modules={[FreeMode]}
        >
          {
            FEATURES_LIST.map((item, idx) => (
              <SwiperSlide key={idx}>
                <StyledItem className={item.class}>
                  {
                    item.lottie
                      ? <div id={`lottie-${item.class}`} style={{ width: '204px', height: '204px' }} />
                      : <StyledImage
                      src={item.image}
                      alt={item.title}
                      width={204}
                      height={204}
                      />
                  }
                  <StyledContent>
                    <StyledH5>{item.title}</StyledH5>
                    <StyledSpan>{item.des}</StyledSpan>
                  </StyledContent>
                </StyledItem>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </StyledContainer>
    </StyledSection>
  );
};

export default FeaturesSection;
