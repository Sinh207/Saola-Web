// styled
import {
  StyledHeader,
  StyledContainer,
  StyledNavToggle,
} from './styled';
import Image from 'next/image';
import { IMAGE_CONST } from '@app/utils/images';
import { useState } from 'react';

// components
import DrawerMenu from './DrawerMenu';
import Router from 'next/router';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleHamburger = () => {
    setIsOpenMenu((oldValue) => !oldValue);
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => bar.classList.toggle('x'));
  };

  return (
    <>
      {
        isOpenMenu && <DrawerMenu isOpen={isOpenMenu} onClose={toggleHamburger} />
      }
      <StyledHeader>
        <StyledContainer>
          <Image
            src={IMAGE_CONST.logo}
            alt="logo saola"
            width={48}
            height={48}
            onClick={() => Router.push('/')}
          />
          <StyledNavToggle className="nav-toggle" onClick={toggleHamburger}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </StyledNavToggle>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
