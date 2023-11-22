import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px 16px;
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
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  background: var(--White, #FFF);
`;
const StyledH5 = styled.h5`
  color: var(--gray-500, #4F7471);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;
const StyledH2 = styled.h2`
  color: var(--Black, #000);
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 45px */
`;

export {
  StyledSection, StyledContainer, StyledH5, StyledH2,
};
