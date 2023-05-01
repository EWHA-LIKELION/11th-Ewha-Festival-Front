import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { COM, C } from './BoothDetail.style';
import PartTitle from './PartTitle';
import Modal from '../_common/modal/Modal';
import { FaTrashAlt } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';
import { RequestProfile } from '../../api/auth';
import { GetBooth, SubmitComment, DeleteComment } from '../../api/booth';
import { boothdetail } from '../../api/_mock/boothmock';

const BoothDetailComment = () => {
  const { id } = useParams();
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token === null) {
      setIsLogin(false);
    }
    if (token !== null) {
      setIsLogin(true);
    }
  }, []);
  useEffect(() => {
    if (isLogin === true) {
      document.getElementById('input').disabled = false;
    }
    if (isLogin === false) {
      document.getElementById('input').disabled = true;
    }
  }, [isLogin]);

  const [thisUser, setThisUser] = useState(0);
  const [thisBoothUserId, setThisBoothUserId] = useState(0);
  const [thisComments, setThisComments] = useState([]);
  const getComments = () => {
    GetBooth(id)
      .then(res => {
        setThisBoothUserId(res.data.data.user);
        setThisComments(res.data.data.comments);
      })
      .catch();
  };
  useEffect(() => {
    getComments();
    RequestProfile()
      .then(res => setThisUser(res.data.data.id))
      .catch();
  }, []);
  const IsBoothUser = cUserId => {
    if (thisBoothUserId === cUserId) {
      return true;
    } else {
      return false;
    }
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = () => setDeleteModal(true);
  const closeDeleteModal = () => setDeleteModal(false);

  const [currentCommentId, setCurrentCommentId] = useState('');
  const PreDeleteComment = cId => {
    openDeleteModal();
    setCurrentCommentId(cId);
  };
  const OnDelete = cId => {
    DeleteComment(id, cId)
      .then(res => {
        getComments();
        closeDeleteModal();
      })
      .catch();
  };

  const [newComment, setNewComment] = useState('');
  const OnSubmit = e => {
    e.preventDefault();
    SubmitComment(id, newComment)
      .then(res => {
        getComments();
        setNewComment('');
        setIsAdd(true);
      })
      .catch();
  };

  const endRef = useRef(null);
  const scrollToBottom = () => {
    endRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    if (isAdd === true) {
      scrollToBottom();
      setIsAdd(false);
    } else {
      setIsAdd(false);
    }
  }, [thisComments]);

  return (
    <COM.Wrapper>
      <C.Container>
        <PartTitle text='댓글' />
        {thisComments &&
          thisComments.map(comment => {
            const time = comment.created_at.toString();
            return (
              <C.CommentContainer key={comment.id}>
                <div className='inner'>
                  <C.CommentTop>
                    <C.CommentText
                      style={{
                        color: IsBoothUser(comment.user.id)
                          ? 'var(--red)'
                          : 'var(--green2)',
                        fontWeight: '600',
                      }}
                    >
                      {comment.user.nickname}
                    </C.CommentText>
                    <C.CommentTimeText>{time}</C.CommentTimeText>
                    {comment.user.id === thisUser ? (
                      <C.Delete onClick={() => PreDeleteComment(comment.id)}>
                        <FaTrashAlt size='13' fill='var(--gray2)' />
                      </C.Delete>
                    ) : null}
                  </C.CommentTop>
                  <C.CommentText>
                    {comment.content &&
                      (comment.content.includes('\n') ? (
                        <>
                          {comment.content.split('\n').map((line, idx) => {
                            return (
                              <span key={idx}>
                                {line}
                                <br />
                              </span>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <span>{comment.content}</span>
                        </>
                      ))}
                  </C.CommentText>
                </div>
              </C.CommentContainer>
            );
          })}
      </C.Container>
      <C.Bottom />
      <div ref={endRef} />
      <C.CommentInputWrapper>
        <C.CommentInputContainer>
          <C.CommentInput
            placeholder={
              isLogin ? '댓글을 입력하세요' : '로그인 후 댓글을 입력해보세요'
            }
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            autoComplete='off'
            id='input'
          />
          {isLogin ? (
            <C.WriteRect
              onClick={e => (newComment === '' ? null : OnSubmit(e))}
            >
              <HiPencil size='20' fill='var(--green1)' />
            </C.WriteRect>
          ) : null}
        </C.CommentInputContainer>
      </C.CommentInputWrapper>
      {deleteModal ? (
        <Modal
          title='댓글 삭제'
          subTitle='삭제한 댓글은 다시 불러올 수 없습니다.'
          contents='해당 댓글을 삭제하시겠습니까?'
          open={deleteModal}
          close={closeDeleteModal}
          onClick={() => OnDelete(currentCommentId)}
        />
      ) : null}
    </COM.Wrapper>
  );
};

export default BoothDetailComment;
