import React, { useState, useEffect } from 'react';
import { COM, I } from './BoothDetail.style';
import titlestar from '../../assets/images/boothdetailpage/titlestar.svg';
import PartTitle from './PartTitle';
import { FiMap } from 'react-icons/fi';

const BoothDetailInfo = props => {
  const { college, number, description } = props;
  // 운영 시간 타입 확정 후 수정 필요
  const [isOpen, setIsOpen] = useState(false);

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const replace = content => {
    const convertContent = content.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
    const htmlArr = [];
    convertContent.split('\n').forEach(function (text) {
      const textHtml = '<p>' + text + '</p>';
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
          <FiMap stroke='var(--red)' size='17' />
          <div className='text'>부스 위치 지도 {isOpen ? '닫기' : '보기'}</div>
        </I.MapButton>
        <I.Indent>
          <div className='inner'>
            <I.Text
              style={{ marginBottom: '15px' }}
            >{`${college} ${number}`}</I.Text>
            {isOpen ? <I.Map src={null} /> : null}
          </div>
        </I.Indent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <I.StarImg src={titlestar} />
          <I.Title>부스 운영시간</I.Title>
        </div>
        <I.Indent>
          <div className='inner'>
            <I.Text>10일 수요일 - AM 10:00 ~ PM 5:00</I.Text>
            <I.Text>11일 목요일 - AM 10:00 ~ PM 5:00</I.Text>
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
                        {description.split('\n').map(line => {
                          return (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <span
                        dangerouslySetInnerHTML={replace(description)}
                      ></span>
                    ))}
                </I.LongDes>
              ) : (
                <I.ShortDes>
                  {description &&
                    (description.includes('\n') ? (
                      <>
                        {description.split('\n').map(line => {
                          return (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <span
                        dangerouslySetInnerHTML={replace(description)}
                      ></span>
                    ))}
                </I.ShortDes>
              )}
            </I.DesContainer>
          </div>
        </I.Indent>
      </I.Container>
    </COM.Wrapper>
  );
};

export default BoothDetailInfo;
