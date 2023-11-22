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
import { IMAGE_CONST } from '@app/utils/images';

const DrawerMenu = ({ isOpen = false, onClose }) => {
  const { route } = Router;

  const LIST_SOCIAL = [
    {
      icon: IMAGE_CONST.social.iconFacebookMb,
      key: 'facebook',
    },
    {
      icon: IMAGE_CONST.social.iconTeviMb,
      key: 'tevi',
    },
    {
      icon: IMAGE_CONST.social.iconTiktokMb,
      key: 'tiktok',
    },
    {
      icon: IMAGE_CONST.social.iconInsMb,
      key: 'ins',
    },
    {
      icon: IMAGE_CONST.social.iconLinkedinMb,
      key: 'linkedin',
    },
  ];

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
              onClick={onClose}
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
              LIST_SOCIAL.map((item, idx) => (
                <Image src={item.icon} alt={item.key} key={idx} width={32} height={32} className={item.key} />
              ))
            }
          </div>
        </StyledSocial>
      </StyledContainer>
    </StyledDrawer>
  );
};

export default DrawerMenu;
