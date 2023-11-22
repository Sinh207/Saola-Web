import styled from 'styled-components';
import { Form } from 'antd';
import Image from 'next/image';

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 96px 124px;
  //background: var(--Black, #000);
`;
const StyledContainer = styled.div`
  display: flex;
  padding: 72px;
  align-items: center;
  gap: 72px;
  align-self: stretch;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  .ant-row{
    width: 100%;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
  margin: auto;
`;
const StyledH2 = styled.h2`
  color: var(--White, #FFF);
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 54px */
  margin-bottom: 32px;
`;
const StyledForm = styled(Form)`
  width: 100%;
  input, textarea {
    width: 100%;
    height: 52px;
    border: 1px solid var(--gray-700, #2F4644) !important;
    background: var(--gray-900, #101717);
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    &::placeholder {
      color: var(--gray-400, #708E8C);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }
  }
  .ant-select{
    height: 52px;
    .ant-select-selector {
      border: 1px solid var(--gray-700, #2F4644) !important;
      background: var(--gray-900, #101717);
      .ant-select-selection-placeholder, .ant-select-selection-item {
        color: var(--gray-400, #708E8C);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
      }

    }
    .ant-select-arrow {
      .anticon {
        color: var(--gray-400, #708E8C);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
      }
    }
  }

`;
const StyledImageUpload = styled.div`
    width: 100%;
`;
const StyledCustomFileLabel = styled.label`
  width: 100%;
  height: 52px;
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border: 1px solid var(--gray-700, #2F4644);
  background: var(--gray-900, #101717);
  cursor: pointer;
  border-radius: 6px;
  span {
    color: var(--gray-400, #708E8C);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
  }
`;
const StyledCustomFileInput = styled.input`
    display: none !important;
`;
const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    height: 64px;
    display: flex;
    padding: 0 32px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border: 1px solid var(--gray-600, #3F5D5A);
    background: #FFF;
    border-radius: 6px;
    gap: 10px;
    span {
      color: var(--gray-900, #101717);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 30px */
    }
  }
`;
export {
  StyledSection,
  StyledContainer,
  StyledImage,
  StyledH2,
  StyledForm,
  StyledImageUpload,
  StyledCustomFileLabel,
  StyledCustomFileInput,
  StyledFooter,
};
