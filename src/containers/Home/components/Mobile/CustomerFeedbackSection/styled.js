import styled from 'styled-components';

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  background: var(--gray-25, #F4F7F7);
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`;
const StyledH2 = styled.h2`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 1px solid #E4EAEA;
  color: var(--gray-900, #101717);
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 90px */
`;
const StyledListFeedback = styled.div`
  position: relative;
  width: 100%;
  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        max-width: 80%;
      }
    }
  }
`;
const StyledFeedback = styled.div`
  width: 100%;
  padding: 24px 0;
  .details{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .title  {
    color: var(--gray-900, #101717);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%; /* 50px */
    margin-bottom: 24px;
  }
  .des{
    color: var(--gray-700, #2F4644);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    margin-bottom: 24px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    span:nth-child(1){
      color: var(--primary-500, #E04B53);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 36px */
    }
    span:nth-child(2){
      color: var(--gray-900, #101717);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 27px */
    }
  }
`;

export {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledListFeedback,
  StyledFeedback,
};
