import React from 'react';
import styled from 'styled-components';
import titlebackground from '../../assets/images/boothdetailpage/titlebackground.svg';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const PartTitle = ({ text, option, isOpen, setIsOpen }) => {
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Container>
        <Title>
          <Text>{text}</Text>
          <Img src={titlebackground} />
        </Title>
        {option &&
          (isOpen ? (
            <BsChevronUp size='20' fill='var(--gray1)' />
          ) : (
            <BsChevronDown size='20' fill='var(--gray1)' />
          ))}
      </Container>
      <Border />
    </Wrapper>
  );
};

export default PartTitle;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 120px;
  height: 65px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  font-family: var(--pre-font);
  font-weight: 700;
  color: var(--white);
  position: absolute;
  z-index: 5;
  margin-top: 3px;
`;

const Img = styled.img`
  width: 120px;
`;

const Border = styled.div`
  border-bottom: 1px solid var(--gray2);
  width: 100%;
  height: 0;
  opacity: 0.5;
`;
