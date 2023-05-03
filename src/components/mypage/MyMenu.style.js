import styled from 'styled-components';
//images
import nameWrapper from '../../assets/images/mypage/nameContainer.svg';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;

  background-color: #fff9f1;
`;
export const Container = styled.div`
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  font-family: var(--pre-font);
  background-color: #fff9f1;
  overflow: scroll;
`;

export const NameContainer = styled.div`
  width: 250px;
  height: 135px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${nameWrapper});
  background-position: center;
  background-repeat: no-repeat;
`;
export const TaskTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: var(--red);
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: ${props => props.size};
  color: var(--green1);
`;
export const ID = styled.div`
  color: var(--green2);
`;
export const Logout = styled.button`
  font-size: 12.48px;
  text-decoration: underline;
  border-style: none;
  background-color: transparent;
  color: var(--red);
`;
export const BoothContainer = styled.div`
  width: 82%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
`;
export const TfContainer = styled.div`
  width: 82%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
`;

export const ManageTitle = styled.div`
  margin-top: 25px;
  padding-bottom: 8px;
  border-style: none none solid none;
  border-bottom: solid 1px var(--gray2);

  font-weight: 700;
  font-size: 16px;
  color: var(--green1);
`;
export const BoothTitle = styled.div`
  height: 45px;
  margin-top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  background-color: var(--green1);
  filter: drop-shadow(0px 2px 6px rgba(165, 165, 165, 0.2));
  border-radius: 4px;
  color: var(--white);

  @media (max-width: 300px) {
    font-size: 13px;
  }
`;
export const GoManageBtn = styled.div`
  height: 45px;
  margin-top: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  color: var(--green1);
  filter: drop-shadow(0px 2px 6px rgba(165, 165, 165, 0.2));
  border-radius: 4px;
  background-color: var(--white);

  div {
    display: flex;
  }
  svg {
    margin: 0 10px;
  }
  .noticeIcon {
    width: 20px;
    height: 20px;
  }
  .boothIcon {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 300px) {
    font-size: 13px;
  }
`;
export const ListContainer = styled.div`
  width: 82%;
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;
export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SelectFilter = styled.div`
  display: flex;
  margin-top: 14px;

  color: var(--gray2);
  font-weight: 400;
  font-size: 15px;
  .active {
    color: var(--red);
    font-weight: bold;
  }
  div {
    margin-right: 10px;
  }
  @media (max-width: 300px) {
    font-size: 12px;
  }
`;
export const SelectFilter_Detail = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    height: 29.12px;
    margin: 0 10px 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--white);
    color: var(--green2);
    font-size: 14px;
    border: 1.04px solid #029c54;
    border-radius: 20px;

    &.active1,
    &.active2,
    &.active3 {
      background-color: var(--green2);
      color: var(--white);
      font-weight: bold;
    }
    @media (max-width: 300px) {
      font-size: 11px;
    }
  }
`;
export const LikedList = styled.div`
  width: 100%;
  height: auto;

  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LikedBooth = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BoothImg = styled.div`
  background-image: url(${props => props.url});
  width: 90%;
  aspect-ratio: 1/1;
  margin-bottom: 10px;
  border: solid;
`;
export const BoothLocation = styled.div`
  color: var(--red);
  font-size: 12px;
  text-align: left;
`;
export const BoothName = styled.div`
  color: var(--green1);
  font-size: 14px;
  font-weight: 700;
`;
export const BoothHashTag = styled.div`
  color: var(--green2);
  font-size: 10px;
`;
export const Heart = styled.div``;
