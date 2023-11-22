import React from 'react';
import dynamic from 'next/dynamic';

const RootLayout = dynamic(() => import('@components/Layout'), {
  ssr: false,
});
const LandingPage = dynamic(() => import('@components/Layout/LandingPage'), {
  ssr: false,
});
const ProjectsContainer = dynamic(() => import('@containers/Projects'), {
  ssr: false,
});

const WorksPage = () => <ProjectsContainer />;

WorksPage.getLayout = (page) => (
  <RootLayout>
    <LandingPage>{page}</LandingPage>
  </RootLayout>
);

export default WorksPage;
