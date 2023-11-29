import { useEffect } from 'react';
import { HUBSPOT_CONFIG } from '@containers/Contact/constant';

// styled
import {
  StyledSection,
  StyledContainer,
  StyledImage,
  StyledH2,
  StyledForm,
} from './styled';

// antd
import {
  Col,
  Row,
  Input,
} from 'antd';
import { IMAGE_CONST } from '@app/utils/images';

const { TextArea } = Input;

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create(HUBSPOT_CONFIG);
      }
    });
  }, []);

  return (
      <StyledSection className="main-section">
          <StyledContainer
              style={{
                backgroundImage: `url(${IMAGE_CONST.contact.backgroundMainContact})`,
              }}
              className="container"
          >
              <Row gutter={{
                xs: 0, sm: 0, md: 0, lg: 40, xl: 72,
              }}
              >
                  <Col
                      xs={0}
                      sm={0}
                      md={0}
                      lg={10}
                      xl={10}
                  >
                      <StyledImage>
                          <img src={IMAGE_CONST.layout.imageFooter} alt="footer" width={332} height={332} />
                      </StyledImage>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                      <StyledH2>What are you looking for?</StyledH2>
                      <StyledForm id="hubspotForm" />
                  </Col>
              </Row>
          </StyledContainer>
      </StyledSection>
  );
};

export default HubspotContactForm;
