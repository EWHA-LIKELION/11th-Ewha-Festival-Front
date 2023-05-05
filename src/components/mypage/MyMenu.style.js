import styled from 'styled-components';
//images
import nameWrapper from '../../assets/images/mypage/nameContainer.svg';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 130px);

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--beige);
  font-family: var(--pre-font);
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
  min-height: 45px;
  height: auto;
  margin-top: 12px;

  /* padding: 5px 20%; */
  line-height: 19px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: ${({ size }) => size + 'px'};
  background-color: var(--green1);
  filter: drop-shadow(0px 2px 6px rgba(165, 165, 165, 0.2));
  border-radius: 4px;
  color: var(--white);

  @media (max-width: 300px) {
    font-size: ${({ size }) => size - 2 + 'px'};
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
  font-size: 17px;
  .active {
    color: var(--red);
    font-weight: 800;
  }
  div {
    margin-right: 9px;
  }
  @media (max-width: 300px) {
    font-size: 14px;
    div {
      margin-right: 6px;
    }
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
export const LikedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikedGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 30px;
`;
export const FooterWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
