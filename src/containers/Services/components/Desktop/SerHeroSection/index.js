import {
  StyledSection,
  StyledContainer,
  StyledContent,
  StyledH2,
  StyledH5,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';
import { Col, Row } from 'antd';

const SerHeroSection = () => (
  <StyledSection className="hero-section">
    <StyledContainer className="container">
      <Row>
        <Col span={18}>
          <StyledContent
            style={{
              backgroundImage: `url(${IMAGE_CONST.services.backgroundSerHeroSection})`,
            }}
          >
            <StyledH2>
              Comprehensive ∞<br />
              Creative Capabilities
            </StyledH2>
            <StyledH5>
              We are experts in crafting bold visuals, distinctive brand identities, innovative products,<br /> and immersive websites. Whether you want to elevate your company's visual language, <br />build an MVP, or explore a new idea, we'll take care of everything.
            </StyledH5>
          </StyledContent>
        </Col>
      </Row>
    </StyledContainer>
  </StyledSection>
);

export default SerHeroSection;
