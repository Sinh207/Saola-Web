import styled from 'styled-components';
import Image from 'next/image';

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
  padding: 80px 0;
  border-bottom: 1px solid #202E2D;
  &:first-child {
    padding: 0 0 80px 0;
  }
  &:last-child {
    padding: 80px 0 0 0;
    border-bottom: unset;
  }
`;
const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  .ant-row{
    width: 100%;
  }
`;
const StyledItemName = styled.h2`
  color: var(--primary-500, #E04B53);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 64px */
  letter-spacing: -1.28px;
`;
const StyledItemDes = styled.h2`
  color: var(--White, #FFF);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`;
const StyledItemWhat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  span:nth-child(1) {
    color: var(--gray-400, #708E8C);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
  }
  span{
    color: var(--White, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
`;
const StyledItemTimeLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  span:nth-child(1) {
    color: var(--gray-400, #708E8C);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
  }
  span{
    color: var(--White, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
`;
const StyledItemVisitNow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  a {
    color: var(--White, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    text-decoration-line: underline;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export {
  StyledSection,
  StyledContainer,
  StyledItem,
  StyledItemName,
  StyledItemDes,
  StyledItemWhat,
  StyledItemTimeLine,
  StyledItemVisitNow,
  StyledImage,
};
