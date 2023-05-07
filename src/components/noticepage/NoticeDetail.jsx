import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RequestProfile } from '../../api/auth';
import { GetNotice, PatchNotice, DeleteNotice } from '../../api/tf';
import { COM, D } from './Notice.style';
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';
import Modal from '../_common/modal/Modal';
import { T } from '../boothdetailpage/BoothDetail.style';

const NoticeDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const textarea = useRef();
  const token = localStorage.getItem('token');
  const [isTF, setIsTF] = useState(false);
  const [notice, setNotice] = useState({});
  const getNotice = () => {
    GetNotice(id)
      .then(res => {
        setNotice(res.data.data);
      })
      .catch();
    setNewTitle(notice.title);
    setNewContent(notice.content);
  };
  useEffect(() => {
    RequestProfile(token)
      .then(res => {
        setIsTF(res.data.data.is_tf);
      })
      .catch();
    getNotice();
  }, []);

  const OnDelete = () => {
    DeleteNotice(id)
      .then(res => {
        nav('/notice');
      })
      .catch();
  };
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const handleTitle = e => setNewTitle(e.target.value);
  const handleContent = e => setNewContent(e.target.value);
  const OnPatch = () => {
    PatchNotice(id, newTitle, newContent)
      .then(res => {
        setIsEditing(false);
        getNotice();
      })
      .catch();
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    getNotice();
  }, [isEditing]);
  return (
    <COM.Wrapper>
      <TopBar title='공지사항' />
      <D.Container>
        {isEditing ? (
          <D.Input type='text' value={newTitle} onChange={handleTitle} />
        ) : (
          <D.NoticeTitle>{notice.title}</D.NoticeTitle>
        )}
        <D.Border />
        {isEditing ? null : (
          <div className='inner'>
            <D.NoticeText style={{ color: 'var(--green2)' }}>TF팀</D.NoticeText>
            <D.NoticeText style={{ marginLeft: '10px', color: 'var(--gray2)' }}>
              {notice.created_at === notice.updated_at
                ? notice.created_at
                : `${notice.updated_at} 수정`}
            </D.NoticeText>
          </div>
        )}
        {isEditing ? (
          <D.TextArea
            type='text'
            value={newContent}
            onChange={handleContent}
            rows={20}
            ref={textarea}
          ></D.TextArea>
        ) : (
          <D.Text>
            {notice.content &&
              (notice.content.includes('\n') ? (
                <>
                  {notice.content.split('\n').map((line, idx) => {
                    return (
                      <span key={line + idx}>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </>
              ) : (
                <span>{notice.content}</span>
              ))}
          </D.Text>
        )}
        <D.Border />
        <D.BottomContainer>
          {isTF ? (
            <>
              <COM.WhiteBtn
                onClick={() =>
                  isEditing ? setIsEditing(false) : setDeleteModal(true)
                }
              >
                {isEditing ? '취소' : '삭제'}
              </COM.WhiteBtn>
              <COM.GreenBtn
                onClick={() => (isEditing ? OnPatch() : setIsEditing(true))}
              >
                {isEditing ? '완료' : '수정'}
              </COM.GreenBtn>
            </>
          ) : null}
        </D.BottomContainer>
      </D.Container>
      <Footer />
      {deleteModal ? (
        <Modal
          title='공지 삭제'
          subTitle='삭제한 공지는 다시 불러올 수 없습니다.'
          contents='해당 공지를 삭제하시겠습니까?'
          open={deleteModal}
          close={() => setDeleteModal(false)}
          onClick={() => OnDelete()}
        />
      ) : null}
    </COM.Wrapper>
  );
};

export default NoticeDetail;
