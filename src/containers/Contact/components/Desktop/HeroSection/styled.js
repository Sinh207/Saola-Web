import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  padding: 124px;
  opacity: 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-top: 56px;
`;
const StyledBackgroundImage = styled.div`
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
const StyledContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;
const StyledListOffice = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 96px;
  align-self: stretch;
  padding-bottom: 24px;
  border-bottom: 1px solid #202E2D;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    span:nth-child(1){
      color: var(--gray-300, #91A8A7);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
    span:nth-child(2){
      color: var(--White, #FFF);
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }
  }
`;
const StyledEmail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  span:nth-child(1){
    color: var(--gray-300, #91A8A7);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  span:nth-child(2){
    color: var(--White, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export {
  StyledSection,
  StyledContainer,
  StyledBackgroundImage,
  StyledH2,
  StyledContact,
  StyledListOffice,
  StyledEmail,
};
