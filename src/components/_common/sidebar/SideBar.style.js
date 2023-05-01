import styled from 'styled-components';
import flower from '../../../assets/images/sidebar/sidebar_flower.svg';
import title from '../../../assets/images/sidebar/sidebar_title.svg';
import side from '../../../assets/images/sidebar/side.svg';

export const BarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
`;

export const Bar = styled.div`
  aspect-ratio: 0.44 / 1;
  height: 90vh;

  max-width: 396px;
  min-width: 252px;

  z-index: 10001;

  position: fixed;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  top: 0;
  left: 0;

  color: var(--white);
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
  .deleteIcon {
    z-index: 1001;
    color: var(--green1);
    width: 35px;
    height: 35px;
    margin-top: 10vh;
    padding-left: 20px;
  }
  @media (min-height: 1000px) {
    width: 352px;
    height: 800px;
    .deleteIcon {
      margin-top: 90px;
    }
  }
`;
export const NavBar = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1001;
  margin-top: 37.5vh;
  display: flex;
  justify-content: center;

  svg {
    width: 42%;
    height: 40px;
  }
  p {
    margin: 3px 0;
    font-size: 0.75rem;
  }
  @media (min-height: 1000px) {
    margin-top: 317px;
  }
`;
export const IconWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const MakersWrapper = styled.div`
  width: 70%;
  position: absolute;
`;
export const MakersIcon = styled.div`
  width: 80%;
  margin-top: 71vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 30%;
    height: 26px;
    z-index: 1002;
  }
  p {
    margin: 2px 0;
    font-size: 0.75rem;
  }
  @media (min-height: 1000px) {
    margin-top: 630px;
  }
`;
