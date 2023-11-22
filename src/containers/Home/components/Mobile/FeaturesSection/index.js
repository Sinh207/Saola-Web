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

import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FEATURES_LIST } from '@containers/Home/constant';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => (
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={204}
                    height={204}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
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

export default FeaturesSection;
