import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.header`
  width: 100%;
  height: 146px;
  mix-blend-mode: difference;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-row {
    width: 100%;
  }
`;
const StyledNav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 48px;
`;
const StyledNavItem = styled(Link)`
  color: #3F5D5A;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  &.active {
    color: var(--White, #FFF);
  }
`;

export {
  StyledHeader,
  StyledContainer,
  StyledNav,
  StyledNavItem,
};
