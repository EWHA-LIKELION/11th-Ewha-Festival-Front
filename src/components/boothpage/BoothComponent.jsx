import React, { useState } from 'react';

// api

// style
import { C } from './Booth.style';

// image
import fillheart from '../../assets/images/fillheart.svg';
import strokeheart from '../../assets/images/strokeheart.svg';
import { useNavigate } from 'react-router-dom';

const BoothComponent = props => {
  const { id, college, number, category, name, hashtag, is_liked, thumnail } =
    props;

  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(is_liked);

  const changeLiked = () => {
    // 서버에 제출 & UI 변경
    setIsLiked(!isLiked);
  };
  return (
    <>
      <C.ComponentContainer>
        <C.ImageWrapper onClick={() => navigate(`/booth/detail/:${id}`)}>
          {thumnail ? <img src={thumnail} /> : <div>썸네일 없음</div>}
        </C.ImageWrapper>
        <C.LocationContainer>
          <div>
            {college}
            {number}•{category}
          </div>
          <div onClick={() => changeLiked()}>
            {isLiked ? (
              <img src={fillheart} width='18px' />
            ) : (
              <img src={strokeheart} width='18px' />
            )}
          </div>
        </C.LocationContainer>
        <C.TitleWrapper>
          <C.BoothTitle length={name.length}>{name}</C.BoothTitle>
          <C.Hashtag>{hashtag}</C.Hashtag>
        </C.TitleWrapper>
      </C.ComponentContainer>
    </>
  );
};

export default BoothComponent;
