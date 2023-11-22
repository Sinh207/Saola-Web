// styled
import { StyledSection, StyledContainer, StyledItem } from './styled';
import { LIST_SERVICES } from '@containers/Services/constant';
import { Col, Row } from 'antd';

const SerMainSection = () => (
  <StyledSection>
    <StyledContainer className="container">
      {LIST_SERVICES.map((item, idx) => (
        <StyledItem key={idx}>
          <Row gutter={32}>
            <Col span={8}>
              <h3 className="title">{item.title}</h3>
            </Col>
            <Col span={16}>
              <div className="des">
                {item.des}
              </div>
              <Row gutter={[24, 12]}>
                {
                  item.features.map((val) => (
                    <Col span={12} key={val}>
                      <span className="feature">{val}</span>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </StyledItem>
      ))}
    </StyledContainer>
  </StyledSection>
);

export default SerMainSection;
