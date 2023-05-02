import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// api

// style
import { C } from './Booth.style';

// image
import fillheart from '../../assets/images/fillheart.svg';
import strokeheart from '../../assets/images/strokeheart.svg';
import defaultthumbnail from '../../assets/images/boothdetailpage/defaultthumbnail.svg';

import { LikeBooth, UnLikeBooth } from '../../api/booth';

const BoothComponent = props => {
  const {
    id,
    college,
    number,
    category,
    name,
    hashtag,
    is_liked,
    thumnail,
    opened,
  } = props;

  const { booth, setBooth } = props;

  const navigate = useNavigate();

  const Like = id => {
    const token = localStorage.getItem('token');

    if (token) {
      // 하트 ui 수정
      setBooth(
        booth.map(props =>
          props.id === id ? { ...props, is_liked: true } : { ...props },
        ),
      );
      // 좋아요 api 요청 보내기
      LikeBooth(id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  const unLike = id => {
    // 하트 ui 수정
    setBooth(
      booth.map(props =>
        props.id === id ? { ...props, is_liked: false } : { ...props },
      ),
    );
    // 좋아요 삭제 api
    UnLikeBooth(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <C.ComponentContainer>
        <C.ImageWrapper onClick={() => navigate(`/booth/detail/${id}`)}>
          <img src={thumnail ? thumnail : defaultthumbnail} />
          {opened ? '' : <div className='closed'>운영 종료</div>}
        </C.ImageWrapper>
        <C.LocationContainer>
          <div>
            {college}
            {number}•{category}
          </div>
          <div onClick={() => (is_liked ? unLike(id) : Like(id))}>
            <img width='16px' src={is_liked ? fillheart : strokeheart} />
          </div>
        </C.LocationContainer>
        <C.TitleWrapper>
          <C.BoothTitle>{name}</C.BoothTitle>
          <C.Hashtag>{hashtag}</C.Hashtag>
        </C.TitleWrapper>
      </C.ComponentContainer>
    </>
  );
};

export default BoothComponent;
