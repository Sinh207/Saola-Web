import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  padding: 124px;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 150px;
`;
const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledH2 = styled.h2`
  color: var(--White, #FFF);
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 115.2px */
`;

export {
  StyledSection,
  StyledContainer,
  StyledContent,
  StyledH2,
};
