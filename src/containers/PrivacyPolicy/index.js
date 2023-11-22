import { isMobile } from 'react-device-detect';

// components
import PrivacyPolicyDesktop from './components/Desktop';
import PrivacyPolicyMobile from './components/Mobile';

const PrivacyPolicyContainer = () => (
  <>
      {isMobile ? <PrivacyPolicyMobile /> : <PrivacyPolicyDesktop />}
  </>
);

export default PrivacyPolicyContainer;
