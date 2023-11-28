import styled from 'styled-components';
import { Drawer, Tabs } from 'antd';
import Link from 'next/link';

const StyledDrawer = styled(Drawer)`
  .ant-drawer-wrapper-body {
    .ant-drawer-header {
      display: none;
      .ant-drawer-header-title {
        .ant-drawer-close {
          color: #1a1a1a;
          padding: unset;
        }
        .ant-drawer-title {
          margin-right: 30px;
          text-align: center;
        }
      }
    }
    .ant-drawer-body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: var(--Black, #000);
    }
  }
`;
const StyledContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

`;
const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  //padding: 16px 36px 0 16px;
  align-items: flex-start;
  align-self: stretch;
`;
const StyledNavItem = styled(Link)`
  display: flex;
  width: 100%;
  padding: 13px 24px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  border-right: 2px solid #3F5D5A;
  color: var(--White, #FFF);
  text-align: right;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 54px */
  animation: fadeInRight 0.2s ease-in-out;
  &.services {
    animation: fadeInRight 0.3s ease-in-out;
  }
  &.works {
    animation: fadeInRight 0.4s ease-in-out;
  }
  &.contact{
    animation: fadeInRight 0.5s ease-in-out;
  }
  &.active{
    border-right: 2px solid #D3DDDC;
  }
`;
const StyledLetsTalk = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 13px 24px;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  span {
    color: var(--gray-300, #91A8A7);
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    animation: fadeInRight 0.6s ease-in-out;
  }
  a {
    color: var(--White, #FFF);
    text-align: right;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    animation: fadeInRight 0.7s ease-in-out;
  }
`;
const StyledSocial = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 13px 24px;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  animation: fadeInRight 0.9s ease-in-out;
  span {
    color: var(--gray-300, #91A8A7);
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    align-self: stretch;
  }
`;

export {
  StyledDrawer,
  StyledContainer,
  StyledNav,
  StyledNavItem,
  StyledLetsTalk,
  StyledSocial,
};
