// styled
import {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledItem,
} from './styled';
import { Col, Row } from 'antd';
import { HOW_LIST } from '@containers/Services/constant';
import { IMAGE_CONST } from '@app/utils/images';

const SerHowSection = () => (
  <StyledSection>
    <StyledContainer className="container">
      <StyledH2>
        How we make great things happen
      </StyledH2>
      <Row gutter={[0, 24]}>
        {
          HOW_LIST.map((item, idx) => (
            <Col span={24}>
              <StyledItem style={{
                backgroundImage: `url(${IMAGE_CONST.services.backgroundSerHow})`,
              }}
              >
                <span>{item.title}</span>
                <span>{item.des}</span>
              </StyledItem>
            </Col>
          ))
        }
      </Row>
    </StyledContainer>
  </StyledSection>
);

export default SerHowSection;
