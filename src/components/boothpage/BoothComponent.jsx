import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// api

// style
import { C } from './Booth.style';

// image
import fillheart from '../../assets/images/fillheart.svg';
import strokeheart from '../../assets/images/strokeheart.svg';
import defaultthumbnail from '../../assets/images/boothdetailpage/defaultthumbnail.svg';
import { useAppSelector } from '../../redux/store';
import { LikeBooth } from '../../api/booth';

// hooks
// import useBookmark from '../_common/useBookmark';

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

  const navigate = useNavigate();

  const { booth_id } = useAppSelector(state => state.booth);
  // const { state, toggle } = useBookmark(is_liked, id);

  return (
    <>
      <C.ComponentContainer>
        <C.ImageWrapper onClick={() => navigate(`/booth/detail/${id}`)}>
          <img
            className={opened ? 'open' : 'closed'}
            src={thumnail ? thumnail : defaultthumbnail}
          />
          {opened ? '' : <div className='closed'>운영 종료</div>}
        </C.ImageWrapper>
        <C.LocationContainer>
          <div className={opened ? 'open' : 'closed'}>
            {college}
            {number}•{category}
          </div>
          <div onClick={() => console.log('토글자리')}>
            <img width='16px' src={is_liked ? fillheart : strokeheart} />
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
