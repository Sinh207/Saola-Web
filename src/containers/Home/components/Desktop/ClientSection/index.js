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
import Image from 'next/image';

const ClientSection = () => {
  const LIST_CLIENT = [
    {
      image: IMAGE_CONST.home.logoTevi,
      key: 'tevi',
      url: '',
    },
    {
      image: '',
      key: '',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoChamniIsEye,
      key: 'chamni-eye',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoNamVietMedia,
      key: 'namviet-media',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoUnigon,
      key: 'unigons',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoAltamedia,
      key: 'alta-media',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoMarathon,
      key: 'marathon',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoFptplay,
      key: 'fptplay',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoLunarush,
      key: 'lunarush',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoUrekaMedia,
      key: 'ureka-media',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoNgheLuon,
      key: 'nghe-luon',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoTefal,
      key: 'tefal',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoAsiaVina,
      key: 'asia-vina',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoAnlene,
      key: 'anlene',
      url: '',
    },
    {
      image: IMAGE_CONST.home.logoThvl,
      key: 'thvli',
      url: '',
    },
  ];

  return (
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
            <div className="list">
              {LIST_CLIENT.map((item, idx) => (
                <StyledItem key={idx}>
                  <div className="image-warp">
                    {
                      item.image && <Image src={item.image} alt={item.key} width={102} height={30} />
                    }
                  </div>
                </StyledItem>
              ))}
            </div>
          </StyledListItem>
        </StyledContainer>
      </StyledBackgroundImage>
    </StyledSection>
  );
};

export default ClientSection;
