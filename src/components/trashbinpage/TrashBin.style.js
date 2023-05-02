import styled from 'styled-components';
import { css } from 'styled-components';
import pinbtn from '../../assets/images/trashbinpage/pin.svg';
import map from '../../assets/images/trashbinpage/trashbinMap.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  font-family: var(--pre-font);
  background-color: #fff9f1;
  overflow: scroll;
`;
export const MapBox = styled.div`
  width: 90%;
  aspect-ratio: 1/1.1;

  max-width: 450px;

  background-image: url(${map});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Pin = styled.object`
  background-image: url(${pinbtn});
  background-repeat: no-repeat;
  background-size: 17px;
  position: absolute;
  width: 17px;
  height: 24px;
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  ${props =>
    props.selected
      ? css`
          background-image: url(${pinbtn});
          background-repeat: no-repeat;
          background-size: 34px;
          top: ${({ top }) => top - 25 + 'px'};
          left: ${({ left }) => left - 8 + 'px'};
          height: 55px;
          width: 34px;
          animation-duration: 1s;
          animation-name: bounce;
          animation-iteration-count: infinite;
        `
      : css``}
`;

export const LocationBox = styled.div`
  width: 85%;
  /* height: 120px; */
  aspect-ratio: 2.8/1;
  max-width: 400px;
  display: flex;
  margin: 20px auto;

  background: var(--white);
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  border-radius: 10px;
`;
export const LocationImg = styled.div`
  width: 43%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-image: url(${props => props.data});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .name {
    font-size: 15px;
    font-family: 'Pretendard-Regular';
    font-weight: 700;
    color: var(--green1);
  }
  .info {
    font-size: 11px;
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    line-height: 16px;
    color: var(--black);
    margin-top: 5px;
  }
`;
