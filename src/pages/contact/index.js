import React from 'react';
import dynamic from 'next/dynamic';

const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});
const LandingPage = dynamic(() => import('@components/Layout/LandingPage'), {
  ssr: false,
});
const ContactContainer = dynamic(() => import('@containers/Contact'), {
  ssr: false,
});

const ContactPage = () => <ContactContainer />;

ContactPage.getLayout = (page) => (
  <RootLayout>
    <LandingPage>{page}</LandingPage>
  </RootLayout>
);

export default ContactPage;
