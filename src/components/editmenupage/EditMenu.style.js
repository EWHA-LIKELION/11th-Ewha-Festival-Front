import styled from 'styled-components';

// Menu Components
const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 90px;
  border-radius: 4px;
  border: solid 0.4px var(--green1);
  background-color: var(--white);

  .arrowIcons {
    width: 11.77px;
    height: 20px;
    color: var(--green1);
  }
`;

const Menu = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const Price = styled.div`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
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
`;

export const C = { Wrapper, Menu, Price, Button };
