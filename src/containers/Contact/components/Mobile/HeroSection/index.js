import {
  StyledSection,
  StyledContainer,
  StyledBackgroundImage,
  StyledH2,
  StyledContact,
  StyledListOffice,
  StyledEmail,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';
import { Col, Row } from 'antd';
import { LIST_OFFICE } from '@containers/Contact/constant';

const HeroSection = () => (
  <StyledSection className="hero-section">
    <StyledContainer className="container">
      <Row>
        <Col span={20}>
          <StyledBackgroundImage
            style={{
              backgroundImage: `url(${IMAGE_CONST.services.backgroundSerHeroSection})`,
            }}
          >
            <StyledH2>
              How can we help?<br />
              Let's work together.
            </StyledH2>
          </StyledBackgroundImage>
        </Col>
      </Row>
      <StyledContact>
        <StyledListOffice>
        {
          LIST_OFFICE.map((item, idx) => (
            <div>
              <span>{item.office}</span>
              <span>{item.address}</span>
            </div>
          ))
        }
        </StyledListOffice>
        <StyledEmail>
          <span>Just say hi!</span>
          <a href="mailto:hello@saola.io">hello@saola.io</a>
        </StyledEmail>
      </StyledContact>
    </StyledContainer>
  </StyledSection>
);

export default HeroSection;
