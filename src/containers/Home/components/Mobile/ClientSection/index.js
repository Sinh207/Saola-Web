// styled
import {
  StyledSection,
  StyledBackgroundImage,
  StyledContainer,
  StyledH2,
  StyledSpan,
  StyledListItem,
  StyledItem,
} from './styled';
import { IMAGE_CONST } from '@app/utils/images';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { CLIENT_LIST } from '@containers/Home/constant';

const ClientSection = () => (
    <StyledSection>
      <StyledBackgroundImage
        style={{
          backgroundImage: `url(${IMAGE_CONST.home.backgroundClientSection})`,
        }}
      >
        <StyledContainer className="container">
          <StyledH2>
            Trusted by some of the world's most vibrant and innovative brands.
          </StyledH2>
          <StyledSpan>Who we’ve worked with</StyledSpan>
          <StyledListItem>
            <Row gutter={[16, 16]}>
              {CLIENT_LIST.map((item, idx) => (
                <Col key={idx} span={12}>
                  <StyledItem>
                    <div className="image-warp">
                      {
                        item.image && <Image src={item.image} alt={item.key} width={102} height={30} />
                      }
                    </div>
                  </StyledItem>
                </Col>
              ))}
            </Row>
          </StyledListItem>
        </StyledContainer>
      </StyledBackgroundImage>
    </StyledSection>
);

export default ClientSection;
