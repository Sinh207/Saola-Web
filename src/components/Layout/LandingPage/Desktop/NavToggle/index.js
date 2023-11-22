// styled
import {
  StyledHeader,
  StyledContainer,
  StyledNavToggle,
} from './styled';
import { useState } from 'react';

import DrawerMenu from './DrawerMenu';
import Image from 'next/image';
import { IMAGE_CONST } from '@app/utils/images';
import Router from 'next/router';

const NavToggle = () => {
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
        <StyledContainer className="container">
          <Image
            src={IMAGE_CONST.logo}
            alt="logo saola"
            width={96}
            height={96}
            onClick={() => Router.push('/')}
          />
          <StyledNavToggle class="nav-toggle" onClick={toggleHamburger}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </StyledNavToggle>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export default NavToggle;
