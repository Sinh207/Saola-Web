import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  padding: 48px 16px;
  opacity: 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: auto;
`;
const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
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
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 115.2px */
`;
const StyledH5 = styled.h5`
  color: var(--gray-100, #D3DDDC);
  font-size: 20px;
  font-style: normal;
  font-weight: 250;
  line-height: 120%; /* 33.6px */
`;

export {
  StyledSection,
  StyledContainer,
  StyledContent,
  StyledH2,
  StyledH5,
};
