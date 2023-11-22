import {
  StyledDrawer,
  StyledContainer,
  StyledNav,
  StyledNavItem,
  StyledLetsTalk,
  StyledSocial,
} from './styled';

import { MENU_NAVIGATE } from '@components/Layout/LandingPage/constant';
import Router from 'next/router';
import Image from 'next/image';
import { SOCIAL_LIST } from '@app/utils/constant';

const DrawerMenu = ({ isOpen = false, onClose }) => {
  const { route } = Router;

  return (
    <StyledDrawer
      placement="right"
      onClose={onClose}
      open={isOpen}
      width="100%"
      zIndex="9"
      closeIcon={false}
    >
      <StyledContainer>
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
        <StyledLetsTalk>
          <span>
            Lets talk
          </span>
          <a href="mailto:hello@saola.io">hello@saola.io</a>
        </StyledLetsTalk>
        <StyledSocial>
          <span>Follow</span>
          <div>
            {
              SOCIAL_LIST.map((item, idx) => (
                <Image
                  src={item.iconMb}
                  alt={item.key}
                  key={idx}
                  width={32}
                  height={32}
                  className={item.key}
                  onClick={() => window.open(item.url, '_blank')}
                />
              ))
            }
          </div>
        </StyledSocial>
      </StyledContainer>
    </StyledDrawer>
  );
};

export default DrawerMenu;
