import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: sticky;
  bottom: 0;
  padding: 124px;
  background: var(--White, #FFF);
  opacity: 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledBLock = styled.div`
  width: 100%;
  padding: 48px 0;
  border-bottom: 1px solid #B2C3C1;
  &:first-child {
    padding:  0 0 48px 0;
  }
  &:last-child {
    padding:  48px 0 0 0;
    border-bottom: unset;
  }
`;
const StyledTextCustom = styled.span`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || 'black'};
  line-height: 150%;
`;
const StyledH2 = styled.h2`
  color: var(--gray-900, #101717);
  font-size: 76px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 115.2px */
  text-decoration-line: underline;
  cursor: pointer;
`;
const StyledOfficeAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;
const StyledListSocial = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  img {
    cursor: pointer;
  }
`;
const StyledOther = styled.div`
  width: 100%;
  padding-top: 48px;
  display: flex;
  justify-content: space-between;
`;
const StyledPrivacyPolicy = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #202E2D;
  line-height: 150%;
  text-decoration-line: underline;
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export {
  StyledFooter,
  StyledContainer,
  StyledBLock,
  StyledTextCustom,
  StyledH2,
  StyledOfficeAddress,
  StyledListSocial,
  StyledOther,
  StyledPrivacyPolicy,
  StyledImage,
};
