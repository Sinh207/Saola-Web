import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  padding: 0 124px 124px 124px;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
const StyledItem = styled.div`
  display: flex;
  padding: 0 124px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  h5 {
    color: var(--White, #FFF);
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 54px */
  }
  span {
    color: var(--White, #FFF);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 45px */
  }
  ul {
    margin-left: 40px;
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
