import {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledListFeedback,
  StyledFeedback,
} from './styled';
import { Col, Row } from 'antd';
import { FEEDBACK_LIST } from '@containers/Home/constant';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const CustomerFeedbackSection = () => (
    <StyledSection>
      <StyledContainer className="container">
        <StyledH2>
          What our clients<br />
          talk about us
        </StyledH2>
        <StyledListFeedback>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={32}
            freeMode
            lazy
            modules={[FreeMode]}
          >
            {
              FEEDBACK_LIST.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <StyledFeedback>
                    <Row gutter={16}>
                      <Col span={24}>
                        <span className="title">“</span>
                      </Col>
                      <Col span={24}>
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
                </SwiperSlide>
              ))
            }
          </Swiper>
        </StyledListFeedback>
      </StyledContainer>
    </StyledSection>
);

export default CustomerFeedbackSection;
