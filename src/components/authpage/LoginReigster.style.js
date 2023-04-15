import styled from "styled-components";
// images
import flower from "../../assets/images/authpage/flower.svg";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF9F1;
    font-family: 'Pretendard';
`
export const LogoBox = styled.div`
    width: 158px;
    height: 91px;
    margin-top: 20%;
    margin-bottom: 10px;

    background-image: url(${flower});
    background-repeat: no-repeat;
`
export const InputForm = styled.form`
    width: 233px;
    display: flex;
    flex-direction: column;
`
export const InputWrapper = styled.div`
    width: ${props => props.width};
    height: 43px;
    margin-top: ${props =>props.marginTop};

    display: flex;
    align-items: center;

    border-radius: 4px;
    background: #FFFFFF;
    box-shadow: 0px 2px 6px 0px #A5A5A533;

    svg{
        margin: 10px;
        color: #BEBEBE;
    }
`
export const CheckWrapper = styled.div`
    width: 233px;
    height: 43px;
    margin-top: 15px;
    display: flex;
    align-items: center;

    svg{
        margin: 10px;
    }
`
export const Input = styled.input`
    width: 80%;
    height: 100%;

    background-color: transparent;
    border-style: none;
    outline: none;
`
export const Button = styled.button`
    margin-top: 22px;
    height: 48px;

    border-radius: 8px;
    border: none;
    background: #029C54;
    color: #ffffff;
`
export const GoRegister = styled.a`
    width: 100%;
    margin-top: 10px;

    text-decoration: none;
    text-align: right;
    font-size: 12px;
    color: #979797;
`