import styled from 'styled-components';
import { css } from 'styled-components';
import pinbtn from '../../assets/images/trashbinpage/pin.svg';
import map from '../../assets/images/trashbinpage/trashbinMap.png';

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

  /* position: relative; */
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
`;

export const LocationBox = styled.div`
  width: 85%;
  /* height: 120px; */
  aspect-ratio: 2.8/1;
  max-width: 400px;
  display: flex;
  margin: 20px 0 30px 0;

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
