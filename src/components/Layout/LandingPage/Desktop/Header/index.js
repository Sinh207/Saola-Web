import Image from 'next/image';
import { IMAGE_CONST } from '@app/utils/images';
import Router from 'next/router';

// styled
import {
  StyledHeader,
  StyledContainer,
  StyledNav,
  StyledNavItem,
} from './styled';
import { Col, Row } from 'antd';
import { MENU_NAVIGATE } from '@components/Layout/LandingPage/constant';

const Header = () => {
  const { route } = Router;

  return (
    <StyledHeader>
      <StyledContainer className="container">
        <Row gutter={62}>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Image
              src={IMAGE_CONST.logo}
              alt="logo saola"
              width={96}
              height={96}
              onClick={() => Router.push('/')}
            />
          </Col>
          <Col xs={16} sm={16} md={16} lg={16} xl={16}>
            <StyledNav>
              {MENU_NAVIGATE.map((item, idx) => (
                <StyledNavItem
                    href={`/${item.key}`}
                    className={`${item.key} ${route === item.route && 'active'}`}
                    key={idx}
                >
                  {item.label}
                </StyledNavItem>
              ))}
            </StyledNav>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <StyledNav>
              <a href="mailto:hello@saola.io">hello@saola.io</a>
            </StyledNav>
          </Col>
        </Row>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
