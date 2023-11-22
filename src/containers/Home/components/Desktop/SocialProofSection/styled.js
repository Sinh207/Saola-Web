import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 124px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: var(--gray-900, #101717);
  opacity: 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
  background: var(--White, #FFF);
`;
const StyledH5 = styled.h5`
  color: var(--gray-500, #4F7471);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  @media(min-width: 640px) {
    font-size: 15px;
  }
  @media(min-width: 768px) {
    font-size: 16px;
  }
  @media(min-width: 992px) {
    font-size: 17px;
  }
  @media(min-width: 1200px) {
    font-size: 18px;
  }
`;
const StyledH2 = styled.h2`
  color: var(--Black, #000);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px; /* 150% */
  letter-spacing: -0.96px;
  @media(min-width: 640px) {
    font-size: 40px;
  }
  @media(min-width: 768px) {
    font-size: 42px;
  }
  @media(min-width: 992px) {
    font-size: 44px;
  }
  @media(min-width: 1200px) {
    font-size: 46px;
  }
`;

export {
  StyledSection, StyledContainer, StyledH5, StyledH2,
};
