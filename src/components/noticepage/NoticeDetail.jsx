import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RequestProfile } from '../../api/auth';
import { GetNotice, PatchNotice, DeleteNotice } from '../../api/tf';
import { COM, D } from './Notice.style';
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';

const NoticeDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [isTF, setIsTF] = useState(false);
  const [notice, setNotice] = useState({});
  useEffect(() => {
    RequestProfile()
      .then(res => {
        setIsTF(res.data.data.is_tf);
        console.log('is tf? ', isTF);
      })
      .catch(err => console.log(err));
    GetNotice(id)
      .then(res => {
        setNotice(res.data.data);
      })
      .catch(err => console.log(err));
    setNotice({
      id: 1,
      user: 1,
      title:
        '[공지] 제목1입니다~! 제목 232443545553 d어어ㅏㅓ쩌구어어자ㅓ껃굳저아ㅓㅓㅓ',
      content:
        'Lorem ipsum dolor sit amet, http://www.instagram.com/likelion_ewha consectetur adipiscing elit. Vestibulum luctus eget lorem vitae placerat. Curabitur ut massa gravida metus lacinia consequat. \n  \n Nunc nisl lorem, pharetra eu quam sed, fringilla maximus arcu. Phasellus aliquam velit vel tempus laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n \n Sed ornare varius congue. Nunc non tortor et justo blandit consequat sed quis libero. \n\n\n\nNam eget sagittis ligula. In fermentum nulla at metus pretium placerat. Curabitur gravida id sapien et pulvinar. Cras eget rhoncus lacus. Vivamus venenatis nisi eu porta convallis. Duis velit tellus, scelerisque viverra enim pharetra, tempus tristique libero. Aliquam lorem erat, tempor sit amet sodales eu, viverra non ante. Cras nisl ligula, pharetra a purus eget, dapibus bibendum ante.\n\nNulla facilisi. Donec consectetur viverra interdum. Fusce dictum dictum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam bibendum quam non risus imperdiet, vel scelerisque dolor dapibus. Aenean eu condimentum purus. Integer dictum tincidunt tortor, ac mattis arcu dapibus nec. Nulla dictum in tortor id interdum. Vestibulum vel justo elementum, lacinia leo ac, pellentesque nibh.',
      created_at: '2023-08-26 17:53',
      updated_at: '2023-08-26 17:53',
    });
  }, []);

  const OnDelete = () => {
    DeleteNotice(id)
      .then(res => {
        console.log(res.data);
        nav('/notice');
      })
      .catch(err => console.log(err));
  };
  const [newTitle, setNewTitle] = useState(notice.title);
  const [newContent, setNewContent] = useState(notice.content);
  const handleTitle = e => setNewTitle(e.target.value);
  const handleContent = e => setNewContent(e.target.value);
  const OnPatch = () => {
    PatchNotice(id, newTitle, newContent)
      .then(res => {
        console.log(res.data);
        nav(`/nav/id`);
      })
      .catch(err => console.log(err));
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <COM.Wrapper>
      <TopBar title='공지사항' />
      <D.Container>
        {isEditing ? (
          <D.Input type='text' value={newTitle} onChange={handleTitle} />
        ) : (
          <D.NoticeTitle>{notice.title}</D.NoticeTitle>
        )}
        <div className='inner'>
          <D.NoticeText style={{ color: 'var(--green2)' }}>TF팀</D.NoticeText>
          <D.NoticeText style={{ marginLeft: '10px', color: 'var(--gray2)' }}>
            {notice.created_at}
          </D.NoticeText>
        </div>
        <D.Border />
        {isEditing ? (
          <D.TextArea type='text' onChange={handleContent}>
            {newContent}
          </D.TextArea>
        ) : (
          <D.Text>
            {notice.content &&
              (notice.content.includes('\n') ? (
                <>
                  {notice.content.split('\n').map(line => {
                    return (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </>
              ) : (
                <span>{notice.content}</span>
              ))}
          </D.Text>
        )}
        <D.Border />
        <D.BottomContainer>
          <COM.WhiteBtn
            onClick={() =>
              isEditing ? setIsEditing(false) : setDeleteModal(true)
            }
          >
            {isEditing ? '취소' : '삭제'}
          </COM.WhiteBtn>
          <COM.GreenBtn
            onClick={() => (isEditing ? OnPatch() : setIsEditing(true))}
          >
            {isEditing ? '완료' : '수정'}
          </COM.GreenBtn>
        </D.BottomContainer>
      </D.Container>
      <Footer />
    </COM.Wrapper>
  );
};

export default NoticeDetail;
