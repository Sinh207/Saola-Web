import {
  StyledSection,
  StyledBackgroundImage,
  StyledContainer,
  StyledH1,
  StyledH2,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';

const HeroSection = () => (
  <StyledSection className="hero-section">
    <StyledBackgroundImage
      style={{
        backgroundImage: `url(${IMAGE_CONST.home.backgroundHeroSection})`,
      }}
      className="container"
    >
      <StyledContainer>
        <StyledH1>Saola</StyledH1>
        <StyledH2>Agency</StyledH2>
      </StyledContainer>
    </StyledBackgroundImage>
  </StyledSection>
);

export default HeroSection;
