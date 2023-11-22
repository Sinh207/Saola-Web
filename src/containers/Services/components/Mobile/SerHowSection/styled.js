import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  background: var(--White, #FFF);
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;
const StyledH2 = styled.h2`
  color: var(--Black, #000);
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 36px */
  letter-spacing: -0.72px;
  text-transform: uppercase;
`;
const StyledItem = styled.div`
  display: flex;
  padding: 26px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  background-color: #F4F7F7;
  height: 100%;
  span:nth-child(1){
    color: var(--Black, #000);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 45px */
  }
  span:nth-child(2){
    color: var(--gray-900, #101717);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
`;

export {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledItem,
};
