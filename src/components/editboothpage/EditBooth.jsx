import React, { useEffect, useState } from 'react';
import { B } from './EditBooth.style';
import { boothdetail } from '../../api/_mock/boothmock';
import TopBar from '../_common/topBar/TopBar';
import { useNavigate } from 'react-router-dom';

const EditBooth = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [notice, setNotice] = useState('');
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(true);

  // 리덕스로 부스 아이디 받아오기 + 서버로부터 부스 아이디에 따른 부스 정보 받아오기
  // useEffect

  const onSubmit = () => {
    if (!name) alert('부스 이름은 필수 정보입니다');
    else {
      console.log('ok');
      // 제출 + navigate
    }
  };

  return (
    <>
      <B.Wrapper>
        <TopBar title='부스 정보 수정' />
        <B.ComponentContainer>
          <B.Title>부스 이름</B.Title>
          <B.Input
            placeholder='부스 이름'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <B.Title>실시간 부스 공지사항</B.Title>
          <B.TextArea
            placeholder='실시간 부스 공지사항'
            value={notice}
            onChange={e => setNotice(e.target.value)}
          />
          <B.Title>부스 소개</B.Title>
          <B.TextArea
            placeholder='부스 소개'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <B.Title>부스 운영시간</B.Title>
          <B.TextArea
            placeholder='부스 운영시간'
            height='50px'
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <B.Title>운영 여부</B.Title>
          <B.OpenWrapper>
            <input
              type='radio'
              id='open'
              onChange={() => setOpen(!open)}
              checked={open}
            />
            <B.Label htmlFor='open'>운영 중</B.Label>
            <input
              type='radio'
              id='closed'
              value={false}
              onChange={() => setOpen(!open)}
              checked={!open}
            />
            <B.Label htmlFor='closed'>운영 종료</B.Label>
          </B.OpenWrapper>

          <B.ButtonWrapper>
            <B.Button type='cancel' onClick={() => navigate(-1)}>
              취소
            </B.Button>
            <B.Button type='submit' onClick={() => onSubmit()}>
              완료
            </B.Button>
          </B.ButtonWrapper>
        </B.ComponentContainer>
      </B.Wrapper>
    </>
  );
};

export default EditBooth;
