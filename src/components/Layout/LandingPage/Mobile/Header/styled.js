import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  padding: 16px;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledNavToggle = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: var(--gray-800, #202E2D);
  mix-blend-mode: difference;
  transition: all .3s;
  &:hover {
    cursor: pointer;
  }
  .bar {
    height: 3px;
    width: 100%;
    background-color: #FFFFFF;
    transition: all 200ms ease-in-out;
  }
  .x:nth-of-type(1) {
    transition: all 200ms ease-in-out;
    transform: rotate(40deg);
    transform-origin: top left;
    width: 33px;
  }
  .x:nth-of-type(2) {
    transition: all 200ms ease-in-out;
    transform-origin: center;
    width: 0;
  }
  .x:nth-of-type(3) {
    transition: all 200ms ease-in-out;
    transform: rotate(-40deg);
    transform-origin: bottom left;
    width: 32px;
  }
`;

export {
  StyledHeader,
  StyledContainer,
  StyledNavToggle,
};
