import React, { useState } from 'react';
import PartTitle from './PartTitle';
import ImageGallery from './ImageGallery';
import { useMap } from './useMap';

import { COM, I } from './BoothDetail.style';
import titlestar from '../../assets/images/boothdetailpage/titlestar.svg';
import { FiMap } from 'react-icons/fi';

const BoothDetailInfo = props => {
  const { college, number, description, times } = props;
  const mapSrc = useMap(college);
  const [isOpen, setIsOpen] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const replace = content => {
    const convertContent = content.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
    const htmlArr = [];
    convertContent.split('\n').forEach(function (text) {
      const textHtml = '<span>' + text + '</span>';
      htmlArr.push(textHtml);
    });
    return { __html: htmlArr.join('') };
  };
  return (
    <COM.Wrapper>
      <I.Container>
        <PartTitle
          text='부스 정보'
          option={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <I.StarImg src={titlestar} />
          <I.Title>부스 위치</I.Title>
        </div>
        <I.MapButton onClick={() => setIsOpen(!isOpen)}>
          <FiMap stroke='var(--red)' size='16' />
          <div className='text'>부스 위치 지도 {isOpen ? '닫기' : '보기'}</div>
        </I.MapButton>
        <I.Indent>
          <div className='inner'>
            {college && number && (
              <I.Text
                style={{ marginBottom: '15px' }}
              >{`${college} ${number}`}</I.Text>
            )}
            {isOpen ? (
              <I.Map src={mapSrc} onClick={() => setMapModal(true)} />
            ) : null}
          </div>
        </I.Indent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <I.StarImg src={titlestar} />
          <I.Title>부스 운영시간</I.Title>
        </div>
        <I.Indent>
          <div className='inner'>
            {times &&
              times.map((item, idx) => {
                if (item.time === '' || item.time === ' ' || item.time === null)
                  return;
                else
                  return (
                    <I.Text key={item.id}>
                      {idx === 0 ? '수요일' : idx === 1 ? '목요일' : '금요일'}
                      &nbsp;-&nbsp;{item.time}
                    </I.Text>
                  );
              })}
          </div>
        </I.Indent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '15px 0 5px 0',
          }}
        >
          <I.StarImg src={titlestar} />
          <I.Title>부스 소개</I.Title>
        </div>
        <I.Indent>
          <div className='inner'>
            <I.DesContainer>
              {isOpen ? (
                <I.LongDes>
                  {description &&
                    (description.includes('\n') ? (
                      <>
                        {description.split('\n').map((line, idx) => {
                          return (
                            <span key={idx}>
                              <span dangerouslySetInnerHTML={replace(line)} />
                              <br />
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <span dangerouslySetInnerHTML={replace(description)} />
                    ))}
                </I.LongDes>
              ) : (
                <I.ShortDes onClick={() => setIsOpen(true)}>
                  {description &&
                    (description.includes('\n') ? (
                      <>
                        {description.split('\n').map((line, idx) => {
                          return (
                            <span key={idx}>
                              <span dangerouslySetInnerHTML={replace(line)} />
                              <br />
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <span dangerouslySetInnerHTML={replace(description)} />
                    ))}
                </I.ShortDes>
              )}
            </I.DesContainer>
          </div>
        </I.Indent>
      </I.Container>
      {mapModal ? (
        <ImageGallery
          array={[{ index: 0, src: mapSrc }]}
          index={0}
          close={() => setMapModal(false)}
          isOne={true}
        />
      ) : null}
    </COM.Wrapper>
  );
};

export default BoothDetailInfo;
