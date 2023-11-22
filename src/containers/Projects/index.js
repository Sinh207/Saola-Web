import { isMobile } from 'react-device-detect';

// components
import ProjectsDesktop from './components/Desktop';
import ProjectsMobile from './components/Mobile';

const ProjectsContainer = () => (
  <>
      {isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}
  </>
);

export default ProjectsContainer;
