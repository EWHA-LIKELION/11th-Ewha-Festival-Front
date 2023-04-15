import React from 'react';
import { useNavigate } from 'react-router-dom';
// style.js
import * as S from './TopBar.style';
// icons
import { HiMenu, HiOutlineSearch } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

const TopBar = props => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <>
      <S.Wrapper>
        <HiMenu />
        {path === '/' ? (
          <S.Title style={{ visibility: 'hidden' }}>{props.title}</S.Title>
        ) : (
          <S.Title>{props.title}</S.Title>
        )}
        {path === '/' ? (
          <BsFillPersonFill />
        ) : path.includes('booth') ? (
          <HiOutlineSearch
            onClick={() => {
              navigate('/search');
            }}
          />
        ) : (
          <HiOutlineSearch style={{ visibility: 'hidden' }} />
        )}
      </S.Wrapper>
    </>
  );
};

export default TopBar;
