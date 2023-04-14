import React from "react";
import { useNavigate } from "react-router-dom";
// style.js
import * as S from "./TopBar.style"
// icons
import { HiMenu, HiOutlineSearch} from "react-icons/hi";

const TopBar = props =>{
    const navigate = useNavigate();
    return(<>
        <S.Wrapper>
            <HiMenu/>
            <S.Title>
                {props.title}
            </S.Title>
            <HiOutlineSearch onClick={()=>{navigate("/search")}}/>
        </S.Wrapper>
    </>)
}

export default TopBar;