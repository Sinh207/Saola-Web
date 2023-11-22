import { isMobile } from 'react-device-detect';

// components
import ProjectsDesktop from './components/Desktop';
import ProjectsMobile from './components/Mobile';
import { usePageLoader } from '@app/hooks/usePageLoader';
import { useEffect } from 'react';

const ProjectsContainer = () => {
  const { onPageLoader } = usePageLoader();

  useEffect(() => {
    onPageLoader();
  }, []);

  return (
    <>
      {isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}
    </>
  );
};

export default ProjectsContainer;
