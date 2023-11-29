import { useEffect } from 'react';
import { HUBSPOT_CONFIG } from '@containers/Contact/constant';

// styled
import {
  StyledSection,
  StyledContainer,
  StyledH2,
  StyledForm,
} from './styled';

// antd
import {
  Col,
  Row,
} from 'antd';
import { IMAGE_CONST } from '@app/utils/images';

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
              <Row>
                  <Col span={24}>
                      <StyledH2>What are you looking for?</StyledH2>
                      <StyledForm id="hubspotForm" />
                  </Col>
              </Row>
          </StyledContainer>
      </StyledSection>
  );
};

export default HubspotContactForm;
