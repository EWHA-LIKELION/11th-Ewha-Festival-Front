import styled from 'styled-components';
import side from '../../../assets/images/sidebar/side.svg';

export const Wrapper = styled.div`
  @media (min-width: 576px) {
    width: 390px;
  }
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Bar = styled.div`
  aspect-ratio: 0.44 / 1;
  height: 90vh;

  max-width: 396px;
  min-width: 252px;

  z-index: 10001;

  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  color: var(--white);
  background-image: url(${side});
  background-size: contain;
  background-position: bottom;

  background-repeat: no-repeat;
  background-color: #fff9f1;
  border-radius: 0 50px 50px 0px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);

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
