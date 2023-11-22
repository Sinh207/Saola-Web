import { isMobile } from 'react-device-detect';

// components
import ServicesDesktop from './components/Desktop';
import ServicesMobile from './components/Mobile';

const HomeContainer = () => (
  <>
    {isMobile ? <ServicesMobile /> : <ServicesDesktop /> }
  </>
);

export default HomeContainer;
