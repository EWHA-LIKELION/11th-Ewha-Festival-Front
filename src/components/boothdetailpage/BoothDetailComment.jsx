import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { COM, C } from './BoothDetail.style';
import PartTitle from './PartTitle';
import Modal from '../_common/modal/Modal';
import { FaTrashAlt } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';
import { boothdetail } from '../../api/_mock/boothmock';

const BoothDetailComment = () => {
  const { id } = useParams();
  const [isLogin, setIsLogin] = useState(true);
  // const token = localStorage.getItem("token");
  useEffect(() => {
    // if (token === null) {
    //   setIsLogin(false);
    // }
    // if (token !== null) {
    //   setIsLogin(true);
    // }
  }, []);
  useEffect(() => {
    if (isLogin === true) {
      document.getElementById('input').disabled = false;
    }
    if (isLogin === false) {
      document.getElementById('input').disabled = true;
    }
  }, [isLogin]);

  const [deleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };
  const [currentCommentId, setCurrentCommentId] = useState('');
  const PreDeleteComment = cId => {
    openDeleteModal();
    setCurrentCommentId(cId);
  };

  const [thisUser, setThisUser] = useState({ id: 2 });
  const [thisBoothUserId, setThisBoothUserId] = useState();
  const [thisComments, setThisComments] = useState([]);
  const getComments = () => {
    // GetBooth(id)
    //   .then(res => {
    //     setThisBoothUserId(res.data.data.user);
    //     setThisComments(res.data.data.comments);
    //   })
    //   .catch();
    setThisBoothUserId(boothdetail.data.user);
    setThisComments(boothdetail.data.comments);
  };
  useEffect(() => {
    getComments();
    // http
    //   .get('/accounts/')
    //   .then(res => {
    //     setThisUser(res.data.data);
    //   })
    //   .catch();
    setDeleteModal(false);
    setInputModal(false);
  }, []);

  const IsBoothUser = cUserId => {
    if (thisUser.id === cUserId) {
      return true;
    } else {
      return false;
    }
  };

  const DeleteComment = cId => {
    // DeleteCommentA(id, cId)
    //   .then(res => {
    //     getComments();
    //   })
    //   .catch();
    closeDeleteModal();
  };

  const [newComment, setNewComment] = useState('');
  const [inputModal, setInputModal] = useState(false);
  const openInputModal = () => {
    setInputModal(true);
  };
  const closeInputModal = () => {
    setInputModal(false);
  };

  const OnSubmit = e => {
    e.preventDefault();
    console.log(newComment, '제출');
    // SubmitComment(id, newComment)
    //   .then(res => {
    //     getComments();
    //   })
    //   .catch();
    setIsAdd(true);
    setNewComment('');
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
    <>
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
                      {comment.user.id === thisUser.id ? (
                        <C.Delete onClick={() => PreDeleteComment(comment.id)}>
                          <FaTrashAlt size='13' fill='var(--gray2)' />
                        </C.Delete>
                      ) : null}
                    </C.CommentTop>
                    <C.CommentText>
                      {comment.content &&
                        (comment.content.includes('\n') ? (
                          <>
                            {comment.content.split('\n').map(line => {
                              return (
                                <span key={line}>
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
      </COM.Wrapper>
      {deleteModal ? (
        <Modal title='댓글 삭제' subTitle='어쩌구' contents='저쩌구' />
      ) : null}
    </>
  );
};

export default BoothDetailComment;
