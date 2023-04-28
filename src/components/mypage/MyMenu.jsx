import React, { useEffect, useState } from 'react';
// api
import { RequestAccount, RequestLogin, RequestLogout } from '../../api/auth';
// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUserTask } from '../../redux/userSlice';
// style.js & fonts
import * as S from './MyMenu.style';
// componets
import TopBar from '../_common/topbar/TopBar';

const MyMenu = () => {
  // useEffect(() => {}, []);

  // 유저 정보 redux
  const dispatch = useAppDispatch();
  const { ID, nickname, isBooth, isTF } = useAppSelector(state => state.user);

  return (
    <>
      <S.Container>
        <TopBar title='마이페이지' />
        <S.NameContainer>
          <S.Name>{nickname}</S.Name>
          <S.ID>{ID}</S.ID>
          <S.Logout onClick={RequestLogout}>로그아웃</S.Logout>
        </S.NameContainer>
      </S.Container>
    </>
  );
};

export default MyMenu;
