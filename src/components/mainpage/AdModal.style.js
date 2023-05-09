import styled from 'styled-components';
import adimage from '../../assets/images/mainpage/adimage.png';
import errornotice from '../../assets/images/mainpage/errornotice.png';
import recovernotice from '../../assets/images/mainpage/recovernotice.png';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 576px) {
    width: 390px;
  }
`;

const Block = styled.div`
  z-index: 200;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.errors ? 'center' : 'space-between')};
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  width: 80%;
  height: 350px;

  background-color: ${props =>
    props.errors ? 'var(--gray2)' : 'var(--white)'};
`;

const ImageWrapper = styled.div`
  width: 90%;
  height: 90%;
  // height: 80%;
  margin-top: ${props => (props.errors ? '0' : '5%')};
  background-color: ${props =>
    props.errors ? 'var(--gray2)' : 'var(--white)'};
  background-image: ${props =>
    props.errors ? `url(${errornotice})` : `url(${recovernotice})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ButtonLine = styled.div`
  width: 90%;
  height: 10%;
  margin-bottom: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: ${props => (props.errors ? 'none' : 'flex')};
`;

const CheckBox = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  img {
    margin-top: 1px;
    margin-right: 5px;
  }
`;

const Close = styled.button`
  width: 96px;
  height: 30px;
  background-color: var(--green2);
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0);
  color: var(--white);
  border-radius: 4px;
  border: none;
  font-size: 15px;
  font-weight: 600;
`;

export const M = {
  Container,
  Background,
  Block,
  ImageWrapper,
  ButtonLine,
  Close,
  CheckBox,
};
