import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  padding: 24px 16px;
`;
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  align-self: stretch;
  background: var(--Black, #000);
`;
const StyledItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background: var(--gray-900, #101717);
  .title {
    color: var(--White, #FFF);
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 64px */
    letter-spacing: -1.28px;
  }
  .des {
    color: var(--gray-400, #708E8C);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    white-space: pre-wrap;
    margin-bottom: 32px;
  }
  .feature{
    color: var(--gray-100, #D3DDDC);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    &:before {
      content: "\\A";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #D3DDDC;
      display: inline-block;
      margin-bottom: 2.5px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

export {
  StyledSection,
  StyledContainer,
  StyledItem,
};
