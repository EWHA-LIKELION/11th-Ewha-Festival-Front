import styled from 'styled-components';
import { css } from 'styled-components';
import pinbtn from '../../assets/images/trashbinpage/pin.webp';
import map from '../../assets/images/trashbinpage/trashbinMap.webp';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 130px);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--beige);
  font-family: var(--pre-font);
  overflow: scroll;
`;
export const MapBox = styled.div`
  width: 90%;
  aspect-ratio: 1/1.1;
  position: relative;

  max-width: 450px;

  background-image: url(${map});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Pin = styled.div`
  background-image: url(${pinbtn});
  background-repeat: no-repeat;
  background-size: 20px;
  position: absolute;

  width: 20px;
  height: 24px;
  margin-top: ${({ top }) => top + '%'};
  margin-left: ${({ left }) => left + '%'};
  ${props =>
    props.selected
      ? css`
          background-image: url(${pinbtn});
          background-repeat: no-repeat;
          background-size: 34px;
          margin-top: ${({ top }) => top - 6 + '%'};
          margin-left: ${({ left }) => left - 2 + '%'};
          height: 55px;
          width: 34px;
          animation-duration: 1s;
          animation-name: bounce;
          animation-iteration-count: infinite;
        `
      : css``}
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, -10px);
    }
  }
`;

export const LocationBox = styled.div`
  width: 85%;
  height: auto;

  max-width: 400px;

  display: flex;
  flex-direction: column;
  margin: -30px 0 30px 0;
  background-color: var(--white);

  filter: drop-shadow(0px 2px 6px rgba(165, 165, 165, 0.2));
  border-radius: 10px;
`;
export const LocationTitle = styled.div`
  width: 100%;
  aspect-ratio: 1/ 0.13;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  color: white;
  background-color: var(--green2);

  @media (max-width: 300px) {
    font-size: 13px;
    font-weight: 600;
  }
`;
export const LocationImg = styled.div`
  width: 100%;
  aspect-ratio: 1.56/1;

  background-image: url(${props => props.data});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const LocationInfo = styled.div`
  width: 100%;
  aspect-ratio: 1/ 0.13;
  overflow: visible;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;

  font-size: 14px;
  font-weight: 500;
  color: var(--green1);
  background-color: var(--white);
  padding: ${props => props.padding + 'px'} 0;
  line-height: 20px;

  @media (max-width: 300px) {
    font-size: 12px;
    padding: ${props => props.padding - 5 + 'px'} 0;
  }
`;
