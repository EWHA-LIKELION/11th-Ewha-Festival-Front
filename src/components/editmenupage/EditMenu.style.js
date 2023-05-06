import styled from 'styled-components';

// Menu Components
const ComponentWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  border-radius: 4px;
  border: solid 0.4px var(--green1);
  background-color: var(--white);
  color: black;

  .arrowIcons {
    width: 40px;
    height: 20px;
    color: var(--green1);
  }

  padding: 0 10px 0 30px;
  margin-bottom: 12px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Menu = styled.div`
  font-weight: 600;
  font-size: 14px;
  padding: 2px;
`;

const Price = styled.div`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  padding: 2px;
`;

export const C = { ComponentWrapper, ContentWrapper, Menu, Price };

// EditMenuPage

const Wrapper = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  background-color: var(--beige);
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px 0 20px;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--green1);
  margin: 12px 0 20px 0;
`;

export const M = { Wrapper, ComponentContainer, Content };

// EditMenuDetailPage

const Title = styled.div`
  font-size: 16px;
  color: var(--green1);
  font-family: var(--pre-font);
  font-weight: 700;
  margin: 12px 0 12px 0;
`;

const Button = styled.button`
  align-items: center;
  width: 96px;
  height: 30px;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  border-radius: 4px;
  color: ${props =>
    props.type === 'submit' ? 'var(--white)' : 'var(--green2)'};
  background-color: ${props =>
    props.type === 'submit' ? 'var(--green2)' : 'var(--white)'};
  border: 0.4px solid var(--green2);
  margin: 56px 0 0 12px;
`;

const Input = styled.input`
  width: ${props => props.width};
  height: 25px;
  border-radius: 4px;
  border: solid 0.4px var(--green1);
  padding: 10px;
  outline: none;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text {
    margin-left: 6px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const SoldoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  color: var(--red);
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  height: 30px;

  .text {
    overflow: hidden;
    margin-right: 4px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const D = {
  Wrapper,
  ComponentContainer,
  Title,
  Input,
  PriceContainer,
  SoldoutContainer,
  ButtonWrapper,
  Button,
};
