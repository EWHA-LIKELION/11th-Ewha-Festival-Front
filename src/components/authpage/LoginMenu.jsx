import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// api, 유저 정보
import { RequestLogin } from '../../api/auth';
import { RequestAccount } from '../../api/auth';
// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUser, setUserTask } from '../../redux/userSlice';
// style.js & fonts
import * as S from './LoginReigster.style';
import { BiUser, BiLockOpen } from 'react-icons/bi';
// components
import TopBar from '../_common/topbar/TopBar';

const LoginMenu = () => {
  const navigate = useNavigate();
  // redux
  const dispatch = useAppDispatch();
  const { ID, PW, isBooth } = useAppSelector(state => state.user);

  // input 상태 관리
  const [id, setID] = useState(ID);
  const [password, setPW] = useState(PW);

  // Submit
  const onSubmitAccount = e => {
    e.preventDefault();
    RequestLogin(id, password)
      .then(res => {
        //아이디 비밀번호 닉네임 저장
        dispatch(
          setUser({
            ID: id,
            PW: password,
            nickname: res.data.data.nickname,
          }),
        );
      })
      .then(() => {
        // 계정 정보 가져오기
        RequestAccount().then(response => {
          dispatch(
            setUserTask({
              isBooth: response.data.data.is_t,
              isTF: response.data.data.is_tf,
            }),
          );
        });
      })
      .then(() => {
        window.location.reload();
        window.location.replace('/');
      })
      .catch(error => {
        alert('아이디와 비밀번호를 확인해주세요.');
      });
  };

  return (
    <>
      <S.Container>
        <TopBar title='로그인' />
        <S.LogoBox />
        <S.InputForm onSubmit={onSubmitAccount}>
          <S.InputWrapper marginTop='15px'>
            <BiUser />
            <S.Input
              placeholder='아이디'
              defaultValue={ID}
              onChange={e => setID(e.target.value)}
            />
          </S.InputWrapper>
          <S.InputWrapper marginTop='15px'>
            <BiLockOpen />
            <S.Input
              type='password'
              placeholder='비밀번호'
              defaultValue={PW}
              onChange={e => setPW(e.target.value)}
            />
          </S.InputWrapper>
          <S.Button type='submit'>로그인</S.Button>
          <S.GoRegister>
            <a href='/auth/register'>회원가입</a>
          </S.GoRegister>
        </S.InputForm>
      </S.Container>
    </>
  );
};

export default LoginMenu;
