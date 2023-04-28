import styled from 'styled-components';
import flower from '../../../assets/images/sidebar/sidebar_flower.svg';
import title from '../../../assets/images/sidebar/sidebar_title.svg';
import side from '../../../assets/images/sidebar/side.svg';

export const BarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
`;

export const Bar = styled.div`
  width: 80%;
  height: 95vh;
  position: absolute;

  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  z-index: 10;
  top: 0;
  left: 0;

  background-image: url(${side});
  background-size: contain;
  background-position: bottom;

  background-repeat: no-repeat;
  background-color: var(--beige);
  border-radius: 0 50px 50px 0px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  animation: LeftToRight 0.8s;
  @keyframes LeftToRight {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translateZ(0);
    }
  }
  svg {
    color: var(--green1);
    width: 40px;
    height: 40px;
    border: solid;
  }
`;
export const TitleBox = styled.div`
  width: 30%;
  aspect-ratio: 1.6/1;

  position: absolute;
  top: 100px;
  background-image: url(${title});
  background-size: 100%;
  background-repeat: no-repeat;
`;
