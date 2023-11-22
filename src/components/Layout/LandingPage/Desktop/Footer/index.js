// styled
import {
  StyledFooter,
  StyledContainer,
  StyledBLock,
  StyledTextCustom,
  StyledH2,
  StyledOfficeAddress,
  StyledListSocial,
  StyledOther,
  StyledPrivacyPolicy,
  StyledImage,
} from './styled';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { IMAGE_CONST } from '@app/utils/images';

const Footer = () => {
  const LIST_OFFICE = [
    {
      office: 'Singapore Office',
      address: '470 North Bridge Road, #05-12 Bugis Cube, Singapore, Singapore',
    },
    {
      office: 'Saigon Office',
      address: '32 Cao Duc Lan, An Phu, Thu Duc City, Ho Chi Minh City',
    },
    {
      office: 'California Office',
      address: '10822 Forbes Ave, Ste D1 Garden Grove CA 92843',
    },
  ];
  const LIST_SOCIAL = [
    {
      icon: IMAGE_CONST.social.iconFacebook,
      key: 'facebook',
    },
    {
      icon: IMAGE_CONST.social.iconTevi,
      key: 'tevi',
    },
    {
      icon: IMAGE_CONST.social.iconTiktok,
      key: 'tiktok',
    },
    {
      icon: IMAGE_CONST.social.iconIns,
      key: 'ins',
    },
    {
      icon: IMAGE_CONST.social.iconLinkedin,
      key: 'linkedin',
    },
  ];

  return (
    <StyledFooter className="footer">
      <StyledContainer className="container">
        <Row gutter={53}>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <StyledBLock>
              <StyledTextCustom fontSize="16px" fontWeight="400" color="#101717">
                Ready to bring your ideas to life?
              </StyledTextCustom>
              <StyledH2>
                Now is always the right time to start!
              </StyledH2>
            </StyledBLock>
            <StyledBLock>
              <Row gutter={[0, 16]}>
                {
                  LIST_OFFICE.map((item, idx) => (
                    <Col span={24} key={idx}>
                      <StyledOfficeAddress>
                        <StyledTextCustom fontSize="14px" fontWeight="400" color="#91A8A7">
                          {item.office}
                        </StyledTextCustom>
                        <StyledTextCustom fontSize="18px" fontWeight="400" color="#101717">
                          {item.address}
                        </StyledTextCustom>
                      </StyledOfficeAddress>
                    </Col>
                  ))
                }
              </Row>
            </StyledBLock>
            <StyledBLock>
              <StyledListSocial>
                {
                  LIST_SOCIAL.map((item, idx) => (
                    <Image src={item.icon} alt={item.key} key={idx} width={32} height={32} />
                  ))
                }
              </StyledListSocial>
              <StyledOther>
                <StyledTextCustom fontSize="18px" fontWeight="400" color="#708E8C">
                  Copyright © 2023 Saola
                </StyledTextCustom>
                <StyledPrivacyPolicy href={'/privacy-policy'}>
                  Privacy Policy
                </StyledPrivacyPolicy>
              </StyledOther>
            </StyledBLock>
          </Col>
          <Col xs={0} sm={0} md={0} lg={6} xl={6}>
            <StyledImage src={IMAGE_CONST.layout.imageFooter} alt="footer" width={332} height={332} />
          </Col>
        </Row>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
