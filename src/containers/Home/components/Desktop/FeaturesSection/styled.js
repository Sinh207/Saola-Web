import styled from 'styled-components';
import Image from 'next/image';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 62px 124px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: var(--White, #FFF);
`;
const StyledBackgroundTitle = styled.div`
  display: flex;
  width: 408px;
  height: 432px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  h2 {
    color: var(--Black, #000);
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 48px */
    letter-spacing: -0.96px;
    text-transform: uppercase;
  }
`;
const StyledContainer = styled.div`
  grid-area: 2 / 1 / 3 / 20;
  z-index: 3;
  grid-column-gap: 3.2rem;
  grid-row-gap: 0;
  grid-template-rows: auto;
  grid-template-columns: minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr) minmax(1px, 1fr);
  grid-auto-columns: 1fr;
  align-content: start;
  align-items: start;
  display: grid;
  position: relative;
`;
const StyledItem = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  &.think-big-move-forward {
    grid-area: 1 / 1 / 2 / 5;
  }
  &.result-oriented{
    grid-area: 1 / 12 / 2 / 16;
    margin-top: 9.5rem;
  }
  &.techno-magicians {
    grid-area: 1 / 6 / 2 / 10;
    margin-top: 30.8rem;
  }
  &.go-wow-or-go-home {
    grid-area: 2 / 1 / 3 / 5;
    margin-top: -11rem;
  }
  &.win-win-partnership {
    grid-area: 2 / 10 / 3 / 14;
    margin-top: 3.2rem;
  }
  &.bonding-together {
    grid-area: 3 / 4 / 4 / 8;
    margin-top: -2rem;
  }
  &.pure-passion {
    grid-area: 3 / 12 / 4 / 16;
    margin-top: 14.2rem;
  }
`;
const StyledContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: var(--gray-25, #F4F7F7);
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
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
