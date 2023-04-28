import React, { useState, useEffect } from 'react';
import { COM, M } from './BoothDetail.style';
import PartTitle from './PartTitle';
import ImageGallery from './ImageGallery';

const BoothDetailMenu = props => {
  const { images, menus } = props;
  const [imgArray, setImgArray] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    if (images) {
      setImgArray(
        images.map((img, idx) => ({
          index: idx,
          src: img.image,
        })),
      );
    }
  }, [images]);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const close = () => setGalleryOpen(false);
  return (
    <>
      {imgArray && (
        <>
          <COM.Wrapper>
            <M.Container>
              <PartTitle text='메뉴' />
              <M.ImageContainer>
                {imgArray.map((img, idx) => {
                  return (
                    <M.ImgRect
                      onClick={() => {
                        setImgIndex(idx);
                        setGalleryOpen(true);
                      }}
                      key={img.index}
                    >
                      <M.Img src={img.src} />
                    </M.ImgRect>
                  );
                })}
              </M.ImageContainer>
              {menus &&
                menus.map(item => {
                  let money = item.price;
                  let commaMoney = money
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                  return (
                    <M.MenuContainer key={item.id}>
                      <M.MenuTextWrapper>
                        <div style={{ width: '72%', wordBreak: 'keep-all' }}>
                          <M.MenuText
                            style={{
                              color: item.is_soldout
                                ? 'var(--gray2)'
                                : 'var(--green1)',
                              fontWeight: '500',
                            }}
                          >
                            {item.menu}
                          </M.MenuText>
                        </div>
                        <M.MenuText
                          style={{
                            color: item.is_soldout
                              ? 'var(--red)'
                              : 'var(--green1)',
                            fontWeight: item.is_soldout ? '500' : '300',
                          }}
                        >
                          {item.is_soldout ? 'sold out' : `${commaMoney}원`}
                        </M.MenuText>
                      </M.MenuTextWrapper>
                    </M.MenuContainer>
                  );
                })}
            </M.Container>
          </COM.Wrapper>
          {galleryOpen ? (
            <ImageGallery array={imgArray} index={imgIndex} close={close} />
          ) : null}
        </>
      )}
    </>
  );
};

export default BoothDetailMenu;
