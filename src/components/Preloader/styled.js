import styled from 'styled-components';
import Image from 'next/image';
import { Progress } from 'antd';

const StyledSection = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: var(--Black, #000);
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loader {
    height: 1rem;
    width: 100%;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    bottom: 0;
    div {
      width: 0%;
      background: white;
      height: 0.6rem;
      border-radius: 10px;
    }
  }
`;
const StyledImage = styled(Image)`
  width: 143.542px;
  height: 220.833px;
`;
const StyledH2 = styled.h2`
  color: var(--gray-25, #F4F7F7);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 48px */
  text-transform: uppercase;
`;
const StyledH3 = styled.h3`
  color: var(--gray-25, #F4F7F7);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 250;
  line-height: 100%; /* 32px */
  letter-spacing: 6.4px;
  text-transform: uppercase;
`;
const StyledProgress = styled(Progress)`
  max-width: 317px;
  .ant-progress-inner{
    background-color: #202E2D;
    .ant-progress-bg {
      height: 4px !important;
    }
  }
`;
const StyledPercent = styled.div``;

export {
  StyledSection, StyledContainer, StyledImage, StyledH2, StyledH3, StyledProgress, StyledPercent,
};
