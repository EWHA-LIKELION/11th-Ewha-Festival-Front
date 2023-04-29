import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RequestProfile } from '../../api/auth';
import { SubmitNotice } from '../../api/tf';
import { COM, D, W } from './Notice.style';
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';
import Modal from '../_common/modal/Modal';

const NoticeWrite = () => {
  const nav = useNavigate();
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const handleTitle = e => setNewTitle(e.target.value);
  const handleContent = e => setNewContent(e.target.value);
  const OnSubmit = () => {
    console.log(newTitle, newContent, '작성');
    SubmitNotice(newTitle, newContent)
      .then(res => {
        console.log(res.data);
        nav(`/notice/${res.data.data.id}`);
      })
      .catch(err => console.log(err));
  };
  const [cancelModal, setCancelModal] = useState(false);
  return (
    <COM.Wrapper>
      <TopBar title='공지사항' />
      <W.Container>
        <D.Input
          type='text'
          placeholder='제목을 작성하세요'
          onChange={handleTitle}
        />
        <D.Border />
        <D.TextArea
          type='text'
          placeholder='내용을 작성하세요'
          rows={20}
          onChange={handleContent}
        ></D.TextArea>
        <D.Border />
        <D.BottomContainer>
          <COM.WhiteBtn onClick={() => setCancelModal(true)}>취소</COM.WhiteBtn>
          <COM.GreenBtn onClick={() => OnSubmit()}>작성</COM.GreenBtn>
        </D.BottomContainer>
      </W.Container>
      <Footer />
      {cancelModal ? (
        <Modal
          title='공지 작성 취소'
          subTitle='작성 취소된 글은 저장되지 않습니다.'
          contents='공지 작성을 취소하시겠습니까?'
          open={cancelModal}
          close={() => setCancelModal(false)}
          onClick={() => nav('/notice')}
        />
      ) : null}
    </COM.Wrapper>
  );
};

export default NoticeWrite;
