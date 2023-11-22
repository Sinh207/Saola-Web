import { isMobile } from 'react-device-detect';

// components
import ServicesDesktop from './components/Desktop';
import ServicesMobile from './components/Mobile';
import { usePageLoader } from '@app/hooks/usePageLoader';
import { useEffect } from 'react';

const ServicesContainer = () => {
  const { onPageLoader } = usePageLoader();

  useEffect(() => {
    onPageLoader();
  }, []);

  return (
    <>
        {isMobile ? <ServicesMobile /> : <ServicesDesktop />}
    </>
  );
};

export default ServicesContainer;
