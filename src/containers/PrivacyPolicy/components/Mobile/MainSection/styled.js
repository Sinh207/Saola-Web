import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  padding: 24px 16px;
  opacity: 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  h5 {
    color: var(--White, #FFF);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 54px */
  }
  span {
    color: var(--White, #FFF);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 45px */
  }
  ul {
    margin-left: 20px;
  }
  a {
    text-decoration-line: underline;
  }
`;

export {
  StyledSection,
  StyledContainer,
  StyledItem,
};
