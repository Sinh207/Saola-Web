import styled from 'styled-components';

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`;
const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  padding: 48px 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  align-self: stretch;
`;
const StyledH2 = styled.h2`
  width: 100%;
  padding: 0 16px;
  color: var(--White, #FFF);
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 80px */
`;
const StyledSpan = styled.span`
  width: 100%;
  padding: 0 16px;
  color: var(--gray-400, #708E8C);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 48px */
`;
const StyledListItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ant-row{
    width: 100%;
  }
`;
const StyledItem = styled.div`
  width: 100%;
  height: 120px;
  padding: 28.5px 23px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-900, #101717);
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-rows: auto;
  grid-template-columns: minmax(1px, 1fr);
  grid-auto-columns: 1fr;
  transition: background-color .6s;
  display: grid;
  &:hover {
    .image-warp {
      opacity: 1;
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
  .image-warp {
    width: 100%;
    opacity: .5;
    filter: grayscale();
    transition: all .6s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export {
  StyledSection,
  StyledBackgroundImage,
  StyledContainer,
  StyledH2,
  StyledSpan,
  StyledListItem,
  StyledItem,
};
