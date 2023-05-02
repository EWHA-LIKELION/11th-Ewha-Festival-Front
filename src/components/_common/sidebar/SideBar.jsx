import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SideBar.style';
//icons
import {
  AiFillHome,
  AiFillShop,
  AiFillNotification,
  AiOutlineSearch,
} from 'react-icons/ai';
import { HiUser, HiTrash, HiX } from 'react-icons/hi';
import { BsPeopleFill } from 'react-icons/bs';

const SideBar = props => {
  const navigate = useNavigate();
  // 사이드바 안보이게 하는 함수
  const DeleteSideBar = () => {
    props.setSideBar(false);
  };
  // 사이드바 배경 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <S.BarWrapper onClick={DeleteSideBar} />
      <S.Bar>
        <HiX onClick={DeleteSideBar} className='deleteIcon' />
        <S.NavBar>
          <S.IconWrapper>
            <div>
              <HiUser onClick={() => navigate('/mypage')} />
              <p>마이 페이지</p>
            </div>
            <div>
              <AiFillHome onClick={() => navigate('/')} />
              <p>메인 페이지</p>
            </div>
            <div>
              <AiFillShop onClick={() => navigate('/booth')} />
              <p>부스 목록</p>
            </div>
            <div>
              <AiFillNotification onClick={() => navigate('/notice')} />
              <p>공지 사항</p>
            </div>
            <div>
              <AiOutlineSearch onClick={() => navigate('/search')} />
              <p>부스 검색</p>
            </div>
            <div>
              <HiTrash onClick={() => navigate('/trashbin')} />
              <p>쓰레기통</p>
            </div>
          </S.IconWrapper>
        </S.NavBar>
        <S.MakersWrapper>
          <S.MakersIcon>
            <BsPeopleFill onClick={() => navigate('/makers')} />
            <p>만든이들</p>
          </S.MakersIcon>
        </S.MakersWrapper>
      </S.Bar>
    </>
  );
};

export default SideBar;
