import { isMobile } from 'react-device-detect';

// components
import Preloader from '@components/Preloader';
import LandingPageDesktop from './Desktop';
import LandingPageMobile from './Mobile';

const LandingPage = ({ children }) => (
    <>
        <Preloader />
        {isMobile ? (
            <LandingPageMobile>{children}</LandingPageMobile>
        ) : (
            <LandingPageDesktop>{children}</LandingPageDesktop>
        )}
    </>
);

export default LandingPage;
