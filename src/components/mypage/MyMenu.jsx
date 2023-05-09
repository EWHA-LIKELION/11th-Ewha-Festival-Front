import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// api
import { RequestLogout } from '../../api/auth';
import { GetBooth } from '../../api/booth';
// redux
import { useAppSelector } from '../../redux/store';
// style.js
import * as S from './MyMenu.style';
//icons
import { FiChevronRight, FiEdit, FiList } from 'react-icons/fi';
import { AiOutlineSound, AiOutlineShop } from 'react-icons/ai';
// componets
import TopBar from '../_common/topbar/TopBar';
import MyLikedContainer from './MyLikedContainer';
import Footer from '../_common/footer/Footer';

const MyMenu = () => {
  useEffect(() => {
    if (isBooth) {
      GetBooth(booth_id).then(res => {
        setBoothName(res.data.data.name);
      });
    }
  }, []);

  const navigate = useNavigate();
  // 유저 정보 redux
  const { ID, nickname, isBooth, isTF } = useAppSelector(state => state.user);
  const { booth_id } = useAppSelector(state => state.booth);
  // 부스 정보
  const [boothName, setBoothName] = useState('');

  // test 값
  return (
    <>
      <S.Container>
        <TopBar title='마이페이지' />
        <S.NameContainer>
          <S.TaskTitle>
            {isBooth ? '부스 관리자' : isTF ? 'TF 팀' : ''}
          </S.TaskTitle>
          <S.Name size={nickname.length >= 6 ? '22px' : '27px'}>
            {nickname}
          </S.Name>
          <S.ID>{ID}</S.ID>
          <S.Logout onClick={RequestLogout}>로그아웃</S.Logout>
        </S.NameContainer>
        {isBooth ? (
          <S.BoothContainer>
            <S.ManageTitle>부스 관리</S.ManageTitle>
            <S.BoothTitle size={boothName.length >= 24 ? '14' : '16'}>
              {boothName}
            </S.BoothTitle>
            <S.GoManageBtn
              onClick={() => navigate(`/booth/detail/${booth_id}`)}
            >
              <div>
                <AiOutlineShop className='boothIcon' />내 부스 페이지 바로가기
              </div>
              <FiChevronRight />
            </S.GoManageBtn>
            <S.GoManageBtn onClick={() => navigate('./editbooth')}>
              <div>
                <FiEdit className='editIcon' />내 부스 정보 수정하기
              </div>
              <FiChevronRight />
            </S.GoManageBtn>
            <S.GoManageBtn onClick={() => navigate('./editmenu')}>
              <div>
                <FiList />내 메뉴 정보 수정하기
              </div>
              <FiChevronRight />
            </S.GoManageBtn>
          </S.BoothContainer>
        ) : isTF ? (
          <S.TfContainer>
            <S.ManageTitle>공지 관리</S.ManageTitle>
            <S.GoManageBtn onClick={() => navigate('/notice')}>
              <div>
                <AiOutlineSound className='noticeIcon' />
                TF 공지사항 바로가기
              </div>
              <FiChevronRight />
            </S.GoManageBtn>
            <S.GoManageBtn onClick={() => navigate('/notice/write')}>
              <div>
                <FiEdit />
                TF 공지사항 작성하기
              </div>
              <FiChevronRight />
            </S.GoManageBtn>
          </S.TfContainer>
        ) : null}
        <MyLikedContainer />
      </S.Container>
      <Footer />
    </>
  );
};

export default MyMenu;
