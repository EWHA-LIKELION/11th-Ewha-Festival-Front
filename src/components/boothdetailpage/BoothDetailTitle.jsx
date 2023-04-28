import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { COM, T } from './BoothDetail.style';
import useBookmark from '../_common/useBookmark';

import { HiMenu } from 'react-icons/hi';
import circle from '../../assets/images/boothdetailpage/circle.svg';
import defaultthumbnail from '../../assets/images/boothdetailpage/defaultthumbnail.svg';
import strokeheart from '../../assets/images/strokeheart.svg';
import fillheart from '../../assets/images/fillheart.svg';

const BoothDetailTitle = props => {
  let { id } = useParams();
  const { currentBooth, setCurrentBooth } = props;
  const { name, thumnail, category, hashtag, is_liked } = currentBooth;
  const { state, toggle } = useBookmark(is_liked, id);
  useEffect(() => {
    setCurrentBooth({
      ...currentBooth,
      is_liked: state,
    });
  }, [state]);
  return (
    <>
      <COM.Wrapper>
        <T.CircleRect>
          <img src={circle} className='circle' />
          <HiMenu size='30' fill='var(--green1)' />
        </T.CircleRect>
        <T.ImgDiv>
          <T.Img src={thumnail ? thumnail : defaultthumbnail} />
        </T.ImgDiv>
        <T.Container>
          <T.TitleContainer>
            <T.Title>
              <p>일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육</p>
            </T.Title>
            <T.HeartDiv onClick={toggle}>
              <T.HeartImg src={is_liked ? fillheart : strokeheart} />
            </T.HeartDiv>
          </T.TitleContainer>
          <T.Category>{category}</T.Category>
          <T.Hashtag>{hashtag}</T.Hashtag>
        </T.Container>
      </COM.Wrapper>
    </>
  );
};

export default BoothDetailTitle;
