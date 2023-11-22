import { isMobile } from 'react-device-detect';

// components
import ContactDesktop from './components/Desktop';
import ContactMobile from './components/Mobile';
import { usePageLoader } from '@app/hooks/usePageLoader';
import { useEffect } from 'react';

const ContactContainer = () => {
  const { onPageLoader } = usePageLoader();

  useEffect(() => {
    onPageLoader();
  }, []);

  return (
    <>
        {isMobile ? <ContactMobile /> : <ContactDesktop />}
    </>
  );
};

export default ContactContainer;
