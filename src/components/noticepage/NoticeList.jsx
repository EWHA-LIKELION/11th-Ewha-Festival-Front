import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RequestProfile } from '../../api/auth';
import { GetAllNotice } from '../../api/tf';
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';
import { COM, L } from './Notice.style';
import { HiOutlinePencilAlt } from 'react-icons/hi';

const NoticeList = () => {
  const nav = useNavigate();
  const [isTF, setIsTF] = useState(false);
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    RequestProfile()
      .then(res => {
        setIsTF(res.data.data.is_tf);
      })
      .catch();
    GetAllNotice()
      .then(res => {
        setNotices(res.data.data);
      })
      .catch();
  }, []);
  return (
    <>
      <COM.Wrapper>
        <TopBar title='공지사항' />
        <L.NoticeWrapper>
          {isTF ? (
            <L.WriteBtn onClick={() => nav('/notice/write')}>
              <HiOutlinePencilAlt stroke='var(--green2)' size='20' />
              <div>공지 작성하기</div>
            </L.WriteBtn>
          ) : null}
          {notices.map(notice => {
            return (
              <L.NoticeContainer
                key={notice.id}
                onClick={() => nav(`/notice/${notice.id}`)}
              >
                <L.NoticeTitle>{notice.title}</L.NoticeTitle>
                <div className='inner'>
                  <L.NoticeText style={{ color: 'var(--green2)' }}>
                    TF팀
                  </L.NoticeText>
                  <L.NoticeText
                    style={{ marginLeft: '10px', color: 'var(--gray2)' }}
                  >
                    {notice.created_at}
                  </L.NoticeText>
                </div>
                <L.Border />
              </L.NoticeContainer>
            );
          })}
        </L.NoticeWrapper>
        <L.Bottom />
      </COM.Wrapper>
      <Footer />
    </>
  );
};

export default NoticeList;
