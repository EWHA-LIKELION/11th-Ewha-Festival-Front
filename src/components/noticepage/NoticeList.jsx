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
      .catch(err => console.log(err));
    GetAllNotice()
      .then(res => {
        console.log(res);
        // setNotices(res.data.data);
      })
      .catch(err => console.log(err));
    setNotices([
      {
        id: 1,
        user: 1,
        title:
          '[공지] 제목1입니다~! 제목 232443545553 d어어ㅏㅓ쩌구어어자ㅓ껃굳저아ㅓㅓㅓ',
        content:
          'Lorem ipsum dolor sit amet, http://www.instagram.com/likelion_ewha consectetur adipiscing elit. Vestibulum luctus eget lorem vitae placerat. Curabitur ut massa gravida metus lacinia consequat. Nunc nisl lorem, pharetra eu quam sed, fringilla maximus arcu. Phasellus aliquam velit vel tempus laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare varius congue. Nunc non tortor et justo blandit consequat sed quis libero. Nam eget sagittis ligula. In fermentum nulla at metus pretium placerat. Curabitur gravida id sapien et pulvinar. Cras eget rhoncus lacus. Vivamus venenatis nisi eu porta convallis. Duis velit tellus, scelerisque viverra enim pharetra, tempus tristique libero. Aliquam lorem erat, tempor sit amet sodales eu, viverra non ante. Cras nisl ligula, pharetra a purus eget, dapibus bibendum ante.\n\nNulla facilisi. Donec consectetur viverra interdum. Fusce dictum dictum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam bibendum quam non risus imperdiet, vel scelerisque dolor dapibus. Aenean eu condimentum purus. Integer dictum tincidunt tortor, ac mattis arcu dapibus nec. Nulla dictum in tortor id interdum. Vestibulum vel justo elementum, lacinia leo ac, pellentesque nibh.',
        created_at: '2023-08-26 17:53',
        updated_at: '2023-08-26 17:53',
      },
      {
        id: 2,
        user: 1,
        title: '제목',
        content: '내용이여',
        created_at: '2022-08-26 17:58',
        updated_at: '2022-08-26 17:58',
      },
      {
        id: 3,
        user: 1,
        title:
          '[공지] 제목2입니다~! 제목 232443545553 d어어ㅏㅓ쩌구어어자ㅓ껃굳저아ㅓㅓㅓ',
        content:
          'Lorem ipsum dolor sit amet, http://www.instagram.com/likelion_ewha consectetur adipiscing elit. Vestibulum luctus eget lorem vitae placerat. Curabitur ut massa gravida metus lacinia consequat. Nunc nisl lorem, pharetra eu quam sed, fringilla maximus arcu. Phasellus aliquam velit vel tempus laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare varius congue. Nunc non tortor et justo blandit consequat sed quis libero. Nam eget sagittis ligula. In fermentum nulla at metus pretium placerat. Curabitur gravida id sapien et pulvinar. Cras eget rhoncus lacus. Vivamus venenatis nisi eu porta convallis. Duis velit tellus, scelerisque viverra enim pharetra, tempus tristique libero. Aliquam lorem erat, tempor sit amet sodales eu, viverra non ante. Cras nisl ligula, pharetra a purus eget, dapibus bibendum ante.\n\nNulla facilisi. Donec consectetur viverra interdum. Fusce dictum dictum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam bibendum quam non risus imperdiet, vel scelerisque dolor dapibus. Aenean eu condimentum purus. Integer dictum tincidunt tortor, ac mattis arcu dapibus nec. Nulla dictum in tortor id interdum. Vestibulum vel justo elementum, lacinia leo ac, pellentesque nibh.',
        created_at: '2022-08-27 17:58',
        updated_at: '2022-08-27 17:58',
      },
    ]);
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
