import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { COM, T } from './BoothDetail.style';
import useBookmark from '../_common/useBookmark';
import ImageGallery from './ImageGallery';
import SideBar from '../_common/sidebar/SideBar';

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
  const [imgModal, setImgModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <COM.Wrapper>
        <T.CircleRect
          onClick={() => {
            setSideBar(true);
          }}
        >
          <img src={circle} className='circle' />
          <HiMenu size='30' fill='var(--green1)' />
        </T.CircleRect>
        <T.ImgDiv onClick={() => setImgModal(true)}>
          <T.Img src={thumnail ? thumnail : defaultthumbnail} />
        </T.ImgDiv>
        <T.Container>
          <T.TitleContainer>
            <T.Title>
              <p>{name}</p>
            </T.Title>
            <T.HeartDiv onClick={toggle}>
              <T.HeartImg src={is_liked ? fillheart : strokeheart} />
            </T.HeartDiv>
          </T.TitleContainer>
          <T.CategoryWrapper>
            {category &&
              category.map(item => {
                return <T.Category key={item}>{item}</T.Category>;
              })}
          </T.CategoryWrapper>
          <T.Hashtag>{hashtag}</T.Hashtag>
        </T.Container>
      </COM.Wrapper>
      {imgModal ? (
        <ImageGallery
          array={
            thumnail
              ? [{ index: 0, src: thumnail }]
              : [{ index: 0, src: defaultthumbnail }]
          }
          index={0}
          close={() => setImgModal(false)}
          isOne={true}
        />
      ) : null}
      {sideBar ? <SideBar setSideBar={setSideBar} /> : null}
    </>
  );
};

export default BoothDetailTitle;
