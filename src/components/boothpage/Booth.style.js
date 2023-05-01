import styled from 'styled-components';

// booth component

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  height: 60vmin;
  /* border: solid; */
`;

const ImageWrapper = styled.div`
  position: relative;
  border: solid 1px black;
  border-radius: 4px;

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

// boothpage

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--beige);
  overflow: auto;
`;

const DayContainer = styled.div`
  display: flex;
  border: solid 1px;
`;

const ViewerContainer = styled.div`
  display: flex;
`;

const UnderViewerContainer = styled.div``;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const B = {
  Wrapper,
  DayContainer,
  ViewerContainer,
  UnderViewerContainer,
  ComponentGrid,
};
