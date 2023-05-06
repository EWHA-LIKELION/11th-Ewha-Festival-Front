import styled from 'styled-components';
// images
import flower from '../../assets/images/authpage/flower.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 640px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--beige);
  font-family: var(--pre-font);
`;
export const LogoBox = styled.div`
  width: 158px;
  height: 91px;
  margin-top: 14%;
  margin-bottom: 10px;

  background-image: url(${flower});
  background-repeat: no-repeat;
`;
export const InputForm = styled.form`
  width: 233px;
  display: flex;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  width: ${props => props.width};
  height: 43px;
  margin-top: ${props => props.marginTop};

  display: flex;
  align-items: center;

  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px #a5a5a533;

  svg {
    margin: 10px;
    color: #bebebe;
  }
`;
export const CheckWrapper = styled.div`
  width: 233px;
  height: 58px;
  margin-top: 7.5px;
  display: flex;
  align-items: center;

  svg {
    margin: 10px;
  }
`;
export const Input = styled.input`
  width: 80%;
  height: 100%;

  background-color: transparent;
  border-style: none;
  outline: none;
`;
export const Button = styled.button`
  margin-top: 22px;
  height: 48px;

  font-size: 15px;
  border-radius: 8px;
  border: none;
  background: #029c54;
  color: #ffffff;
`;
export const GoRegister = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: end;

  a {
    font-size: 12px;
    color: #979797;
    text-decoration: none;
    padding-right: 2px;
  }
`;
