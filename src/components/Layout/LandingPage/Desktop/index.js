import Router from 'next/router';
import { useEffect, useState } from 'react';

// components
import Header from './Header';
import NavToggle from './NavToggle';
import Footer from './Footer';

const LandingPageDesktop = ({ children }) => {
  const [isShowNavToggle, setIsShowNavToggle] = useState(false);

  useEffect(() => {
    window?.addEventListener('scroll', (e) => {
      if (window.scrollY > 150) {
        setIsShowNavToggle(true);
      } else {
        setIsShowNavToggle(false);
      }
    });
  }, []);

  return (
    <>
      <Header />
      {isShowNavToggle && <NavToggle />}
      <>{ children }</>
      <>{ Router.route !== '/contact' && <Footer /> }</>
    </>
  );
};

export default LandingPageDesktop;
