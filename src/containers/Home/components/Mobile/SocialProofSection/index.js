// styled
import {
  StyledSection,
  StyledContainer,
  StyledH5,
  StyledH2,
} from './styled';

const SocialProofSection = () => {
  const PRODUCTS = [
    {
      title: 'Emphasis',
      key: 'emphasis',
    },
    {
      title: 'Define',
      key: 'define',
    },
    {
      title: 'Ideate',
      key: 'ideate',
    },
    {
      title: 'Prototype',
      key: 'prototype',
    },
    {
      title: 'Test',
      key: 'test',
    },
    {
      title: 'Repeat',
      key: 'repeat',
    },
  ];

  return (
    <StyledSection className="main-section">
      <StyledContainer>
        <StyledH5>
          We rapidly transform ideas into problem-solving products, <br />
          designed to adapt swiftly to the evolving market demands.
        </StyledH5>
        {
          PRODUCTS.map((item) => (
            <StyledH2 key={item.key} className={item.key}>{item.title}</StyledH2>
          ))
        }
      </StyledContainer>
    </StyledSection>
  );
};

export default SocialProofSection;
