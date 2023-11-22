import React from 'react';
import dynamic from 'next/dynamic';

const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});
const LandingPage = dynamic(() => import('@components/Layout/LandingPage'), {
  ssr: false,
});
const ServicesContainer = dynamic(() => import('@containers/Services'), {
  ssr: false,
});

const ServicesPage = () => <ServicesContainer />;

ServicesPage.getLayout = (page) => (
  <RootLayout>
    <LandingPage>{page}</LandingPage>
  </RootLayout>
);

export default ServicesPage;
