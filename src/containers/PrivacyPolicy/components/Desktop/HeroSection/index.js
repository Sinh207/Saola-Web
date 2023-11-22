import {
  StyledSection,
  StyledContainer,
  StyledContent,
  StyledH2,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';

const HeroSection = () => (
  <StyledSection className="hero-section">
    <StyledContainer
      className="container"
      style={{
        backgroundImage: `url(${IMAGE_CONST.privacyPolicy.backgroundHeroPrivacyPolicy})`,
      }}
    >
      <StyledH2>
        Privacy Policy
      </StyledH2>
    </StyledContainer>
  </StyledSection>
);

export default HeroSection;
