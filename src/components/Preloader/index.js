import { useEffect, useRef, useState } from 'react';
import { loadComplete } from '@app/utils/animations';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';

// styled
import {
  StyledSection,
  StyledContainer,
  StyledImage,
  StyledH2,
  StyledH3,
  StyledProgress,
  StyledPercent,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';

import { Progress } from 'antd';

const Preloader = () => {
  const [percent, setPercent] = useState(0);

  const progressBarRef = useRef(null);
  const imagesRef = useRef(0);
  const loadedCountRef = useRef(0);
  const loadingProgressRef = useRef(0);

  let loadingTl = gsap.timeline();

  const countPercent = () => {
    setPercent((loadingTl.progress() * 100).toFixed());
  };
  const loadProgress = (imageLoad, image) => {
    loadedCountRef.current += 1;
    loadingProgressRef.current = loadedCountRef.current / imagesRef.current;
    gsap.to(loadingTl, { progress: loadingProgressRef.current, duration: 2 });
  };

  useEffect(() => {
    imagesRef.current = document.querySelectorAll('img').length;

    const imageLoad = imagesLoaded(document.querySelectorAll('img'));
    imageLoad.on('progress', (instance, image) => {
      loadProgress();
    });

    loadingTl = gsap.timeline({
      paused: false,
      onUpdate: countPercent,
      onComplete: loadComplete,
    });

    loadingTl.to(progressBarRef.current, { width: '100%', duration: 2, ease: 'easeInOut' });
  }, []);

  return (
    <StyledSection className="preloader-section">
      <StyledContainer className="container">
        <StyledImage src={IMAGE_CONST.logo} alt="logo-saola" width={265} height={265} />
        <StyledH2>SAOLA</StyledH2>
        <StyledH3>AGENCY</StyledH3>
        <StyledProgress
          percent={percent}
          showInfo={false}
          ref={progressBarRef}
          strokeColor="#fff"
        />
        <StyledPercent>{percent}%</StyledPercent>
      </StyledContainer>
    </StyledSection>
  );
};

export default Preloader;
