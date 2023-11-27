import { StyledSection, StyledContainer, StyledItem } from './styled';
import { LIST_SERVICES } from '@containers/Services/constant';
import { Col, Row } from 'antd';

const SerMainSection = () => (
        <StyledSection className="main-section">
            <StyledContainer className="container">
                {LIST_SERVICES.map((item, idx) => (
                    <StyledItem key={idx}>
                        <Row gutter={[0, 16]}>
                            <Col span={24}>
                                <h3 className="title">{item.title}</h3>
                            </Col>
                            <Col span={24}>
                                <div className="des">
                                    {item.des}
                                </div>
                                <Row gutter={8}>
                                    {
                                        item.features.map((val) => (
                                            <Col span={24} key={val}>
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
