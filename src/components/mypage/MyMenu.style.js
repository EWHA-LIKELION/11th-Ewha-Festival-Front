import styled from "styled-components"
//images
import nameWrapper from "../../assets/images/mypage/nameContainer.svg";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF9F1;
    font-family: 'Pretendard';
`
export const NameContainer = styled.div`
    width: 250px;
    height: 135px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(${nameWrapper});
    background-repeat: no-repeat;
`
export const Name = styled.div`
    padding-top: 20px;
    font-weight: 700;
    font-size: 31.2px;
    color: var(--green1);
`
export const ID = styled.div`
    color: var(--green2);
`
export const Logout = styled.button`
    font-size: 12.48px;
    text-decoration: underline;
    border-style: none;
    background-color: transparent;
    color: var(--gray2);
`