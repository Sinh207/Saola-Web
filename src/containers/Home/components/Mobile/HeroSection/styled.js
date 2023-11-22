import styled from 'styled-components';

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
`;
const StyledBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
`;
const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const StyledH1 = styled.h1`
  color: var(--gray-25, #F4F7F7);
  text-align: center;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 192px */
  text-transform: uppercase;
`;
const StyledH2 = styled.h2`
  color: var(--gray-25, #F4F7F7);
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 250;
  line-height: 100%;
  letter-spacing: 25.6px;
  text-transform: uppercase;
`;

export {
  StyledSection,
  StyledBackgroundImage,
  StyledContainer,
  StyledH1,
  StyledH2,
};
