import { isMobile } from 'react-device-detect';

// components
import PrivacyPolicyDesktop from './components/Desktop';
import PrivacyPolicyMobile from './components/Mobile';
import { usePageLoader } from '@app/hooks/usePageLoader';
import { useEffect } from 'react';

const PrivacyPolicyContainer = () => {
  const { onPageLoader } = usePageLoader();

  useEffect(() => {
    onPageLoader();
  }, []);

  return (
    <>
        {isMobile ? <PrivacyPolicyMobile /> : <PrivacyPolicyDesktop />}
    </>
  );
};

export default PrivacyPolicyContainer;
