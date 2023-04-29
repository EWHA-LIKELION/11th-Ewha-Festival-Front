import React from 'react';
import * as S from './Footer.style';
import likelion from '../../../assets/images/likelionlogo.svg';
import { BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <S.Container>
      <S.MainText>멋쟁이 사자처럼 11기 | Likelion Ewha - 11th</S.MainText>
      <S.MainText>
        <a href='http://pf.kakao.com/_htxexfd' target='_blank'>
          http://pf.kakao.com/_htxexfd
        </a>
      </S.MainText>
      <S.IconContainer>
        <a href='https://linktr.ee/likelion.ewha' target='_blank'>
          <img src={likelion} />
        </a>
        <a href='https://www.instagram.com/likelion_ewha/' target='_blank'>
          <BsInstagram fill='var(--gray2)' size='18' />
        </a>
        <a href='https://github.com/EWHA-LIKELION' target='_blank'>
          <BsGithub fill='var(--gray2)' size='18' />
        </a>
      </S.IconContainer>
      <S.BottomText>
        Copyright ⓒ Likelion Ewha 11th. All Rights Reserved.
      </S.BottomText>
    </S.Container>
  );
};

export default Footer;
