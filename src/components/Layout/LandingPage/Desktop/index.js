import Router from 'next/router';

// components
import Header from './Header';
import Footer from './Footer';

// styled
import { StyledContainer } from './styled';

const LandingPageDesktop = ({ children }) => (
    <>
        <Header />
        <>{ children }</>
        <>{ Router.route !== '/contact' && <Footer /> }</>
    </>
);

export default LandingPageDesktop;
