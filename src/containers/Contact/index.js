import { isMobile } from 'react-device-detect';

// components
import ContactDesktop from './components/Desktop';
import ContactMobile from './components/Mobile';

const ContactContainer = () => (
  <>
      {isMobile ? <ContactMobile /> : <ContactDesktop />}
  </>
);

export default ContactContainer;
