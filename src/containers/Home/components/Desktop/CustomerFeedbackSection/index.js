import {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledListFeedback,
  StyledFeedback,
} from './styled';
import { Col, Row } from 'antd';
import { FEEDBACK_LIST } from '@containers/Home/constant';

const CustomerFeedbackSection = () => (
    <StyledSection>
      <StyledContainer className="container">
        <StyledH2>
          What our clients<br />
          talk about us
        </StyledH2>
        <StyledListFeedback>
          {
            FEEDBACK_LIST.map((item, idx) => (
              <StyledFeedback key={idx}>
                <Row gutter={48}>
                  <Col span={2}>
                    <span className="title">“</span>
                  </Col>
                  <Col span={22}>
                    <div className="details">
                      <span className="title">{item.title}</span>
                      <span className="des">{item.des}</span>
                      <div className="info">
                        <span>{item.name}</span>
                        <span>{item.company}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </StyledFeedback>
            ))
          }
        </StyledListFeedback>
      </StyledContainer>
    </StyledSection>
);

export default CustomerFeedbackSection;
