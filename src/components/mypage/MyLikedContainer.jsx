import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setFilter, setFilterDetail } from '../../redux/mypageSlice';
// style.js, component
import * as S from './MyMenu.style';
import MyFilterBar from './MyFilterBar';
import MyLikedList from './MyLikedList';

const MyLikedContianer = () => {
  const liked_num = 11;

  return (
    <S.ListContainer>
      <S.ManageTitle>좋아요한 부스 ({liked_num})</S.ManageTitle>
      <MyFilterBar />
      <MyLikedList />
    </S.ListContainer>
  );
};
export default MyLikedContianer;
