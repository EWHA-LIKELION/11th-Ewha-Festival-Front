import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { http } from '../../api/http';
// style.js & fonts
import * as S from './MyMenu.style';
// componets
import TopBar from '../_common/topbar/TopBar';

const MyMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getAccount();
  }, []);
  // 유저 정보 관리
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  // 계정 정보 가져오기
  const getAccount = () => {
    try {
      http.get('/accounts/').then(res => {
        console.log(res);
        setName(unescape(res.data.data.nickname));
        setId(res.data.data.username);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 로그아웃 함수
  const logout = () => {
    navigate('/');
  };
  return (
    <>
      <S.Container>
        <TopBar title='마이페이지' />
        <S.NameContainer>
          <S.Name>{name}</S.Name>
          <S.ID>{id}</S.ID>
          <S.Logout onClick={logout}>로그아웃</S.Logout>
        </S.NameContainer>
      </S.Container>
    </>
  );
};

export default MyMenu;
