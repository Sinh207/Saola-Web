import Header from './Header';
import Footer from './Footer';
import Router from 'next/router';

const LandingPageMobile = ({ children }) => (
  <>
    <Header />
    <>{ children }</>
    <>{ Router.route !== '/contact' && <Footer /> }</>
  </>
);

export default LandingPageMobile;
