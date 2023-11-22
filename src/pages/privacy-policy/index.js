import React from 'react';
import dynamic from 'next/dynamic';

const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});
const LandingPage = dynamic(() => import('@components/Layout/LandingPage'), {
  ssr: false,
});
const PrivacyPolicyContainer = dynamic(() => import('@containers/PrivacyPolicy'), {
  ssr: false,
});

const PrivacyPolicyPage = () => <PrivacyPolicyContainer />;

PrivacyPolicyPage.getLayout = (page) => (
  <RootLayout>
    <LandingPage>{page}</LandingPage>
  </RootLayout>
);

export default PrivacyPolicyPage;
