import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// style.js & icons
import * as S from "./LoginReigster.style";
import { BiUser, BiLockOpen } from "react-icons/bi";
import { BsFlower2, BsFillCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { MdOutlineVpnKey } from "react-icons/md";
// components 
import TopBar from "../_common/topbar/TopBar";
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
    const contents = "이화여자대학교 유레카 포털 \n 자유게시판에서 ‘이웃제’ 검색하여 확인"
    const [modal, setModal] = useState(false);
    const [secretModal, setSecretModal] = useState(false);
    const openModal = () =>{
        setModal(true);
    }
    const openSModal = () =>{
        setSecretModal(true);
    }
    const closeModal = () =>{
        setModal(false);
    }
    const closeSModal = () =>{
        setSecretModal(false);
    }
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
        {secretModal ? <Modal open={openSModal} close={closeSModal}
                    title="비밀단어 안내" subTitle="회원가입을 위해서 비밀단어를 입력해주세요."
                    contents={contents} secret="true"
                    onClick={closeSModal} 
                />
        : null}
        {modal ? <Modal open={openModal} close={closeModal}
                    onClick={closeModal} 
                />
        : null}
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
                    <BsFillInfoCircleFill color="#FF9FC7" onClick={openSModal}/>
                </S.CheckWrapper>
                <S.Button type="submit" onClick={openModal}>회원가입</S.Button>
            </S.InputForm>
        </S.Container>
    </>
    )
}

export default RegisterMenu;