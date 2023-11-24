import { StyledSection, StyledContainer, StyledItem } from './styled';
import { LIST_SERVICES } from '@containers/Services/constant';
import { Col, Row } from 'antd';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SerMainSection = () => {
  const ref = useRef([]);
  ref.current = [];

  const animateFrom = (elem, direction) => {
    direction = direction || 1;
    const x = 0;
    const y = -100 * direction;
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = '0';
    gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    });
  };
  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };
  const addToRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  useLayoutEffect(() => {
    ref.current.forEach((elem) => {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter() { animateFrom(elem); },
        onEnterBack() { animateFrom(elem, -1); },
        onLeave() { hide(elem); }, // assure that the element is hidden when scrolled into view
      });
    });
  }, []);

  return (
        <StyledSection className="main-section">
            <StyledContainer className="container">
                {LIST_SERVICES.map((item, idx) => (
                    <StyledItem key={idx} ref={addToRefs}>
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
};

export default SerMainSection;
