import React, { useEffect } from 'react';
import * as S from './SideBar.style';
//icons
import { HiX } from 'react-icons/hi';

const SideBar = props => {
  const isLogin = localStorage.getItem('token');
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
      <S.BarWrapper>
        <S.Bar>
          <HiX onClick={DeleteSideBar} />
        </S.Bar>
      </S.BarWrapper>
    </>
  );
};

export default SideBar;
