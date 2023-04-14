import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// style.js & icons
import * as S from "./LoginReigster.style";
import { BiUser, BiLockOpen } from "react-icons/bi";
import { BsFlower2, BsFillCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { MdOutlineVpnKey } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
// components 
import TopBar from "../_common/topBar/TopBar";
import Modal from "../_common/modal/Modal";
//api
import { RequestSignin } from "../../api/auth";


const RegisterMenu = () =>{
    const navigate = useNavigate();
    // input 상태 관리
    const [id, setID] = useState("");
    const [password, setPW] = useState("");
    const [password2, setPW2] = useState("");
    const [name, setName] = useState("");
    const [secretNum, setSecretNum] = useState(""); 

    // modal 관리 
    const [modal, setModal] = useState(false);
    const title = "비밀단어 안내";
    const subTitle ="회원가입을 위해서 비밀단어를 입력해주세요.";
    const contents = "이화여자대학교 유레카 포털 \n 자유게시판에서 ‘이웃제’ 검색하여 확인";

    // 필수 필드 확인 함수 
    const checkInput =()=>{
        var isSame;
        if(id!=""&&password!=""&&name!=""){
            (password == password2)&&(secretNum==486) ?
            isSame = true:
            isSame = false;
        } 
        return isSame;
    }
    const checkPW = () =>{
        var isSame;
        password!="" && password===password2 ? isSame=true: isSame=false;
        return isSame;        
    }
     // Submit
    const onSubmitAccount = e => {
        e.preventDefault();
        try{
            axios.post("http://3.37.131.250/accounts/signup/", {
             username: id,
             password: password,
             nickname: escape(name)
           }).then((res)=>{
             if(res.data.message=="회원가입 성공"){
                console.log(res);
             }});
         }
         catch(error){
            console.log(error);
         }

        // if(checkInput){
        //     RequestSignin(id, password, name)
        //     .then(response => {
        //         console.log(id,password, name);
        //         navigate("/auth/login");
        //     })
        //     .catch(error => {
        //         if (error.response.status === 400) {
        //         setID("");
        //         alert("이미 존재하는 아이디입니다. 다시 입력해주세요");
        //         return;
        //         }
        //     });
        // }
    };
    return(
    <>
        {modal ? <Modal title={title} subTitle={subTitle} 
                    contents={contents} setModal={setModal}/>: null}
        <S.Container>
            <TopBar title="회원가입"/>
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
                <S.CheckWrapper>
                    <S.InputWrapper width="205px" >
                        <BiLockOpen/>
                        <S.Input
                            type="password"
                            placeholder="비밀번호 확인"
                            onChange={e => {setPW2(e.target.value)}}
                        />   
                    </S.InputWrapper>
                    {checkPW()?  
                        <BsFillCheckCircleFill color=" #029C54"/>:
                        <BsFillCheckCircleFill color="#EAEAEA"/>
                    }
                </S.CheckWrapper>
                <S.InputWrapper marginTop="15px">
                    <BsFlower2/>
                    <S.Input
                        placeholder="닉네임"
                        onChange={e => setName(e.target.value)}
                    />
                </S.InputWrapper>
                <S.CheckWrapper>
                    <S.InputWrapper width="205px">
                        <MdOutlineVpnKey/>
                        <S.Input
                            placeholder="비밀단어"
                            onChange={e => setSecretNum(e.target.value)}
                        />
                    </S.InputWrapper>
                    <BsFillInfoCircleFill color="#FF9FC7" onClick={()=>setModal(true)}/>
                </S.CheckWrapper>
                <S.AlertWrapper>
                    <IoIosWarning/>
                    <S.AlertText>
                    잃어버린 계정 정보는 다시 찾을 수 있는 방법이 없으니<br/> 
                    회원가입 시 잘 기억해두세요!  
                    </S.AlertText>
                </S.AlertWrapper>
                <S.Button type="submit">회원가입</S.Button>
            </S.InputForm>
        </S.Container>
    </>
    )
}

export default RegisterMenu;