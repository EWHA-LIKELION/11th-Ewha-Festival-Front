import styled from 'styled-components';
// image
import daychecked from '../../assets/images/boothpage/daychecked.png';
import viewerchecked from '../../assets/images/boothpage/viewerchecked2.svg';

// booth component
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  height: 60vmin;
`;

const ImageWrapper = styled.div`
  position: relative;
  border: solid 1px black;
  border-radius: 8px;

  width: 43vmin;
  height: 43vmin;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .closed {
    position: absolute;
    z-index: 1;
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  width: 43vmin;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  color: var(--red);
  margin: 4px 0 4px 0;

  .close {
    color: var(--gray2);
  }
`;

const TitleWrapper = styled.div`
  width: 43vmin;
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BoothTitle = styled.div`
  font-weight: 700;
  font-size: ${props => (props.length > 15 ? '13px' : '14px')};
  line-height: 15px;
  color: var(--green1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Hashtag = styled.div`
  font-weight: 400;
  font-size: 10px;
  color: var(--green2);
`;

export const C = {
  ComponentContainer,
  ImageWrapper,
  LocationContainer,
  TitleWrapper,
  BoothTitle,
  Hashtag,
};

// filterbar

const DayFilterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: solid 1px var(--gray3);
  overflow: hidden;
`;

const DayContainer = styled.div`
  color: ${props => (props.checked ? 'var(--green2)' : 'var(--gray2)')};
  background-image: ${props => (props.checked ? `url(${daychecked})` : 'none')};
  background-size: 102%;
  border-bottom: ${props =>
    props.checked ? 'solid 3px var(--green2)' : 'none'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 50px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .number {
    font-size: 13px;
    font-weight: 300;
    line-height: 15px;
  }
  .day {
    font-weight: ${props => (props.checked ? '700' : '500')};
    font-size: 16px;
    line-height: 20px;
  }
`;

const ViewerFilterContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ViewerContainer = styled.div`
  color: ${props => (props.checked ? 'var(--white)' : 'var(--gray2)')};
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 30px;
  font-weight: ${props => (props.checked ? '600' : '400')};
  font-size: 13px;
  line-height: 13px;
  position: relative;

  .check {
    position: absolute;
    z-index: 0;
    display: ${props => (props.checked ? 'inline' : 'none')};
  }

  .text {
    position: absolute;
    z-index: 1;
    overflow: hidden;
  }
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const DataContainer = styled.div`
  width: 72px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.checked ? 'var(--green2)' : 'var(--white)'};
  color: ${props => (!props.checked ? 'var(--green2)' : 'var(--white)')};
  border: solid 1px var(--green2);
  border-radius: 104px;
  font-size: 14px;
  margin: 3px 4px 3px 4px;
`;

export const F = {
  DayFilterContainer,
  DayContainer,
  ViewerFilterContainer,
  ViewerContainer,
  DataGrid,
  DataContainer,
};

// boothpage

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--beige);
  overflow: auto;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const BoothLength = styled.div`
  width: 85%;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: var(--gray2);
  margin: 8px 0 4px 0;
`;

export const B = {
  Wrapper,
  ComponentGrid,
  BoothLength,
};
