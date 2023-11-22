// components
import HeroSection from './HeroSection';
import MainSection from './MainSection';
import { usePageLoader } from '@app/hooks/usePageLoader';
import { useEffect } from 'react';

const ProjectsDesktop = () => (
    <>
      <HeroSection />
      <MainSection />
    </>
);

export default ProjectsDesktop;
