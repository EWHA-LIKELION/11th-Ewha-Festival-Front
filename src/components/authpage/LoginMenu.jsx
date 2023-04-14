import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// style.js & fonts
import * as S from "./LoginReigster.style";
import { BiUser, BiLockOpen } from "react-icons/bi";
// components
import TopBar from "../_common/topBar/TopBar";

const LoginMenu = () =>{
    const navigate = useNavigate();
    // input 상태 관리
    const [id, setID] = useState("");
    const [password, setPW] = useState("");

    // 필수 필드 확인 함수 
    const checkInput =()=>{
        var isSame;
        id!=""&&password!="" ?
            isSame = true:
            isSame = false
        return isSame;
    }
     // Submit
    const onSubmitAccount = e => {
        e.preventDefault();
        try{
            axios.post("http://3.37.131.250/accounts/login/", {
             username: id,
             password: password,
           }).then((res)=>{
             if(res.data.message=="로그인 성공"){
                console.log(res);
                window.localStorage.setItem("token",res.data.data.access_token);
             }});
         }
         catch(error){
            console.log(error);
         }
    };
    return(
    <>
        <S.Container>
            <TopBar title="로그인"/>
            <S.LogoBox/>
            <S.InputForm onSubmit={onSubmitAccount}>
                <S.InputWrapper marginTop="15px">
                    <BiUser/>
                    <S.Input
                        placeholder="아이디"
                        onChange={e => setID(e.target.value)}
                    />
                </S.InputWrapper>
                <S.InputWrapper marginTop="15px">
                    <BiLockOpen/>
                    <S.Input
                        type="password"
                        placeholder="비밀번호"
                        onChange={e => setPW(e.target.value)}
                    />
                </S.InputWrapper>
                <S.Button type="submit">로그인</S.Button>
                <S.GoRegister href="/auth/register">회원가입</S.GoRegister>
            </S.InputForm>
        </S.Container>
    </>
    )
}

export default LoginMenu;