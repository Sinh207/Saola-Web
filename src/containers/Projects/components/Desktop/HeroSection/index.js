import {
  StyledSection,
  StyledContainer,
  StyledContent,
  StyledH2,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';
import { Col, Row } from 'antd';

const HeroSection = () => (
  <StyledSection className="hero-section">
    <StyledContainer className="container">
      <Row>
        <Col span={16}>
          <StyledContent
            style={{
              backgroundImage: `url(${IMAGE_CONST.services.backgroundSerHeroSection})`,
            }}
          >
            <StyledH2>
              OUR WORK IS BRINGING<br />
              IDEAS TO LIFE
            </StyledH2>
          </StyledContent>
        </Col>
      </Row>
    </StyledContainer>
  </StyledSection>
);

export default HeroSection;
