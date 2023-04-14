import styled from "styled-components";
// images
import cloud from "../../../assets/images/topbar/cloud.svg";

export const Wrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    border-style: none none solid none;
    border-bottom: solid 1px var(--gray2);
    svg{
        width: 30px;
        height: 30px;
        color: var(--green1);
    }
`
export const Title = styled.div`
    width: 165px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${cloud});
    background-repeat: none;

    color: var(--white);
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
`