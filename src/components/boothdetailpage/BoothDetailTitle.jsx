import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { T } from './BoothDetail.style';
import useBookmark from '../_common/useBookmark';

import defaultthumnail from '../../assets/images/boothdetailpage/defaultthumnail.png';

const BoothDetailTitle = props => {
  let { id } = useParams();
  const { currentBooth, setCurrentBooth } = props;
  const { name, thumnail, hashtag, is_liked } = currentBooth;
  const { state, toggle } = useBookmark(is_liked, id);
  useEffect(() => {
    setCurrentBooth({
      ...currentBooth,
      is_liked: state,
    });
  }, [state]);
  return (
    <div>
      <T.Wrapper>
        <T.ImgDiv>
          <T.Img src={thumnail ? thumnail : defaultthumnail} />
        </T.ImgDiv>
        <p>{name}</p>
        <p onClick={toggle}>{`${is_liked}`}</p>
        <p>{hashtag}</p>
      </T.Wrapper>
    </div>
  );
};

export default BoothDetailTitle;
