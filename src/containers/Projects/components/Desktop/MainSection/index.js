import {
  StyledSection,
  StyledContainer,
  StyledItem,
  StyledItemName,
  StyledItemDes,
  StyledItemWhat,
  StyledItemTimeLine,
  StyledItemVisitNow,
  StyledImage,
} from './styled';
import { Col, Row } from 'antd';
import { PROJECTS_LIST } from '@containers/Projects/constant';

const MainSection = () => (
  <StyledSection>
    {
      PROJECTS_LIST.map((item, idx) => (
        <StyledContainer key={idx} className="container">
          <Row gutter={80}>
            <Col span={12}>
              <StyledItem>
                <StyledItemName>{item.name}</StyledItemName>
                <StyledItemDes>{item.des}</StyledItemDes>
                <Row>
                  <Col span={12}>
                    <StyledItemWhat>
                      <span>What we do</span>
                      {
                        item.whats.map((val) => (
                          <span key={val}>{val}</span>
                        ))
                      }
                    </StyledItemWhat>
                  </Col>
                 <Col span={12}>
                   <StyledItemTimeLine>
                     <span>Timeline</span>
                     <span>{item.timeline}</span>
                   </StyledItemTimeLine>
                 </Col>
                </Row>
                <StyledItemVisitNow>
                  <a href={item.url} target="_blank" rel="noreferrer">VISIT NOW</a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.75 5.00049V15.0005C19.75 15.4145 19.414 15.7505 19 15.7505C18.586 15.7505 18.25 15.4145 18.25 15.0005V6.81152L6.53005 18.5315C6.38405 18.6775 6.19202 18.7515 6.00002 18.7515C5.80802 18.7515 5.61599 18.6785 5.46999 18.5315C5.17699 18.2385 5.17699 17.7635 5.46999 17.4705L17.19 5.75049H9.00002C8.58602 5.75049 8.25002 5.41449 8.25002 5.00049C8.25002 4.58649 8.58602 4.25049 9.00002 4.25049H19C19.098 4.25049 19.1951 4.27059 19.2871 4.30859C19.4701 4.38459 19.6161 4.5306 19.6931 4.7146C19.7301 4.8056 19.75 4.90249 19.75 5.00049Z" fill="white" />
                  </svg>
                </StyledItemVisitNow>
              </StyledItem>
            </Col>
            <Col span={12}>
              <StyledImage src={item.image} alt={item.name} width={580} height={435} />
            </Col>
          </Row>
        </StyledContainer>
      ))
    }

  </StyledSection>
);

export default MainSection;
