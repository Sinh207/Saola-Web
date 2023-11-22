import { isMobile } from 'react-device-detect';

// components
import LandingPageDesktop from './Desktop';
import LandingPageMobile from './Mobile';

const LandingPage = ({ children }) => (
    <>
      {isMobile ? (
        <LandingPageMobile>{children}</LandingPageMobile>
      ) : (
        <LandingPageDesktop>{children}</LandingPageDesktop>
      )}
    </>
);
export default LandingPage;
