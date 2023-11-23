import styled from 'styled-components';
import Image from 'next/image';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: var(--White, #FFF);
`;
const StyledBackgroundTitle = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  h2 {
    color: var(--Black, #000);
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 32px */
    letter-spacing: -0.64px;
    text-transform: uppercase;
  }
`;
const StyledContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  .panel {
    will-change: transform;
  }
  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        max-width: 80%;
      }
    }
  }
`;
const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  will-change: transform;
`;
const StyledContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  background: var(--gray-25, #F4F7F7);
`;
const StyledImage = styled.img`
  width: 70% !important;
  height: auto;
`;
const StyledH5 = styled.h5`
  color: var(--Black, #000);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  text-transform: uppercase;
`;
const StyledSpan = styled.span`
  color: var(--gray-900, #101717);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export {
  StyledSection,
  StyledBackgroundTitle,
  StyledContainer,
  StyledItem,
  StyledContent,
  StyledImage,
  StyledH5,
  StyledSpan,
};
