import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 48px 16px;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledH2 = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--White, #FFF);
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 80px */
`;
const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px 0;
  border-bottom: 1px solid #202E2D;
  &:first-child{
    padding: 0 0 24px  0;
  }
  &:last-child{
    padding: 24px 0 0 0;
    border-bottom: unset;
  }
  span:nth-child(1){
    color: var(--White, #FFF);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 54px */
  }
  span:nth-child(2){
    color: var(--gray-400, #708E8C);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
  }
`;

export {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledItem,
};
