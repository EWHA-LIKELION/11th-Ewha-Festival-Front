import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  HiOutlineX,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

const ImageGallery = props => {
  const { array, index, close } = props;
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isWhere, setIsWhere] = useState({ left: false, right: false });

  useEffect(() => {
    document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  useEffect(() => {
    if (array.length === 0) {
      setIsWhere({ left: false, right: false });
    } else {
      if (currentIndex === 0) {
        setIsWhere({ left: true, right: false });
      } else if (currentIndex === array.length - 1) {
        setIsWhere({ left: false, right: true });
      } else {
        setIsWhere({ left: false, right: false });
      }
    }
  }, [currentIndex]);
  return (
    <Container>
      <Background onClick={() => close()} />
      <Block>
        {array && (
          <ImgContainer>
            <div className='div-main'>
              {array[currentIndex] && (
                <img className='image-main' src={array[currentIndex].src} />
              )}
              <ArrowContainer>
                {!isWhere.left && (
                  <ClickArea onClick={() => setCurrentIndex(currentIndex - 1)}>
                    <HiOutlineChevronLeft stroke='var(--white)' size='40' />
                  </ClickArea>
                )}
                {!isWhere.right && (
                  <ClickArea
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    style={{ right: '0' }}
                  >
                    <HiOutlineChevronRight
                      className='right'
                      stroke='var(--white)'
                      size='40'
                    />
                  </ClickArea>
                )}
              </ArrowContainer>
            </div>
            <div className='swiper-nav'>
              {array.map((img, idx) => {
                return (
                  <div
                    key={`img${idx}`}
                    className='div-nav'
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <img className='image-nav' src={img.src} alt='menu-img' />
                  </div>
                );
              })}
            </div>
          </ImgContainer>
        )}
        <Close onClick={() => close()}>
          <HiOutlineX stroke='var(--white)' size='30' />
        </Close>
      </Block>
    </Container>
  );
};

export default ImageGallery;

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Block = styled.div`
  z-index: 200;
  width: 100%;
  height: auto;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Close = styled.div`
  position: fixed;
  z-index: 500;
  top: 20px;
  right: 20px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  z-index: 150;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ClickArea = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  svg {
    filter: drop-shadow(0px 2px 4px rgb(0 0 0 / 0.2));
  }
  .right {
    position: absolute;
    right: 0;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .div-main {
    overflow-x: initial !important;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-main {
    width: 100%;
    @media (orientation: landscape) {
      width: auto;
      height: 100%;
    }
  }
  .swiper-nav {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    z-index: 100;
  }
  .div-nav {
    border-radius: 10px;
    margin: 0 3px;
    overflow: hidden;
    width: 18vw;
    height: 18vw;
  }
  .image-nav {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
