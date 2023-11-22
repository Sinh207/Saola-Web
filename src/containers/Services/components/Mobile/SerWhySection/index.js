import {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledItem,
} from './styled';
import { Col, Row } from 'antd';
import { IMAGE_CONST } from '@app/utils/images';
import { WHY_LIST } from '@containers/Services/constant';

const SerWhySection = () => (
  <StyledSection>
    <StyledContainer
      className="container"
      style={{
        backgroundImage: `url(${IMAGE_CONST.services.backgroundSerWhyMb})`,
      }}
    >
      <Row gutter={[0, 40]}>
        <Col span={24}>
          <StyledH2>Why winning businesses’ been seeking to work with our team?</StyledH2>
        </Col>
        <Col span={24}>
          {
            WHY_LIST.map((item, idx) => (
              <StyledItem key={idx}>
                <span>{item.title}</span>
                <span>{item.des}</span>
              </StyledItem>
            ))
          }
        </Col>
      </Row>
    </StyledContainer>
  </StyledSection>
);

export default SerWhySection;
