import React from 'react';
import dynamic from 'next/dynamic';

const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});
const LandingPage = dynamic(() => import('@components/Layout/LandingPage'), {
  ssr: false,
});
const HomeContainer = dynamic(() => import('@containers/Home'), {
  ssr: false,
});

const Index = () => <HomeContainer />;

Index.getLayout = (page) => (
      <RootLayout>
            <LandingPage>{page}</LandingPage>
      </RootLayout>
);

export default Index;
