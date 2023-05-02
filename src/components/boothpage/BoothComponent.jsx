import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// api

// style
import { C } from './Booth.style';

// image
import fillheart from '../../assets/images/fillheart.svg';
import strokeheart from '../../assets/images/strokeheart.svg';
import { useAppSelector } from '../../redux/store';
import { LikeBooth } from '../../api/booth';

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

  const booth_id = useAppSelector(state => state.user);
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(is_liked);

  const changeLiked = () => {
    // 서버에 제출
    const token = localStorage.getItem('token');
    if (token) {
      setIsLiked(!isLiked);
    } else {
      alert('로그인이 필요한 서비스입니다');
    }
  };
  return (
    <>
      <C.ComponentContainer>
        <C.ImageWrapper onClick={() => navigate(`/booth/detail/:${id}`)}>
          {thumnail ? (
            <img className={opened ? 'open' : 'closed'} src={thumnail} />
          ) : (
            ''
          )}
          {opened ? '' : <div className='closed'>운영 종료</div>}
        </C.ImageWrapper>
        <C.LocationContainer>
          <div className={opened ? 'open' : 'closed'}>
            {college}
            {number}•{category}
          </div>
          <div onClick={() => changeLiked(id)}>
            {isLiked ? (
              <img src={fillheart} width='18px' />
            ) : (
              <img src={strokeheart} width='18px' />
            )}
          </div>
        </C.LocationContainer>
        <C.TitleWrapper>
          <C.BoothTitle
            className={opened ? 'open' : 'closed'}
            length={name.length}
          >
            {name}
          </C.BoothTitle>
          <C.Hashtag className={opened ? 'open' : 'closed'}>
            {hashtag}
          </C.Hashtag>
        </C.TitleWrapper>
      </C.ComponentContainer>
    </>
  );
};

export default BoothComponent;
