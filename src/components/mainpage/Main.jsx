import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// style
import * as S from './Main.style';

// image
import tobooth from '../../assets/images/mainpage/toboothback.svg';
import title from '../../assets/images/mainpage/title.svg';
import v1 from '../../assets/images/mainpage/v1.svg';
import v2 from '../../assets/images/mainpage/v2.svg';
import v3 from '../../assets/images/mainpage/v3.svg';
import cloud from '../../assets/images/mainpage/cloud.svg';
import b1 from '../../assets/images/mainpage/b1.svg';
import b2 from '../../assets/images/mainpage/b2.svg';
import b3 from '../../assets/images/mainpage/b3.svg';
import date1 from '../../assets/images/mainpage/date1.svg';
import date2 from '../../assets/images/mainpage/date2.svg';
import date3 from '../../assets/images/mainpage/date3.svg';
import logo from '../../assets/images/mainpage/logo.png';
import likelion from '../../assets/images/mainpage/likelion.png';

// mock
import { event1, event2, event3 } from '../../api/_mock/eventmock';

// component
import Footer from '../_common/footer/Footer';
import TopBar from '../_common/topbar/TopBar';
import AdModal from './AdModal';

const Main = () => {
  const navigate = useNavigate();
  const cookies = document.cookie.split(`; `).map(el => el.split('='));

  const [isChecked, setIsChecked] = useState(
    cookies[0][1] ? cookies[0][1] : 'false',
  );

  const refreshday = new Date(new Date().setHours(24, 0, 0, 0));

  const List = props => {
    return (
      <>
        <div className='content' key={props.id}>
          <div className='title'>{props.title}</div>
          <div className='time'>{props.time}</div>
        </div>
      </>
    );
  };

  const modalSubmit = checked => {
    document.cookie = `maincheck=${checked};expires=${refreshday.toUTCString()}`;
    setIsChecked('true');
  };

  return (
    <>
      {isChecked === 'true' ? (
        ''
      ) : (
        <AdModal submit={checked => modalSubmit(checked)} />
      )}

      <S.Wrapper>
        <TopBar />
        <S.Title>
          <img alt='blank' className='title' src={title} />
          <img alt='blank' className='v1' src={v1} />
          <img alt='blank' className='v2' src={v2} />
          <img alt='blank' className='v3' src={v3} />
        </S.Title>
        <img alt='blank' src={tobooth} onClick={() => navigate('/booth')} />
        <S.Cloud>
          <img alt='blank' src={cloud} />
          <div className='title'>행사 일정</div>
        </S.Cloud>
        <S.Event>
          <img alt='blank' src={b1} />
          <img alt='blank' className='date' src={date1} />
          <div className='box'>
            {event1.map(props => (
              <List key={props.id} {...props} />
            ))}
          </div>
        </S.Event>
        <S.Event>
          <img alt='blank' src={b2} />
          <img alt='blank' className='date' src={date2} />
          <div className='box'>
            {event2.map(props => (
              <List key={props.id} {...props} />
            ))}
          </div>
        </S.Event>
        <S.Event>
          <img alt='blank' src={b3} />
          <img alt='blank' className='date' src={date3} />
          <div className='box'>
            {event3.map(props => (
              <List key={props.id} {...props} />
            ))}
          </div>
        </S.Event>
        <br />
        <S.ScheduleButton
          href='https://www.instagram.com/p/Cr9zvUsPUq_/?igshid=NTc4MTIwNjQ2YQ%3D%3D'
          target='_blank'
        >
          공연 일정표 보러가기
        </S.ScheduleButton>
        <S.Cloud>
          <img alt='blank' src={cloud} />
          <div className='title'>About</div>
        </S.Cloud>
        <S.AboutContainer>
          <img alt='blank' src={logo} width='170px' />
          <S.Text>
            136년 전 이화는 단 한 명의 학생을 위해
            <br />이 땅에서 최초로 여성 교육의 문을 열었습니다. 기독교 정신의
            <br />
            사랑과 헌신을 바탕으로 우리 사회의 금기를 깨뜨리며 끊임없이 도전해
            <br />온 이화의 하루 하루는 기적의 역사가 되었습니다.
            <br />
            어쩌구 저쩌구 행사소개
          </S.Text>
          <S.TFButton onClick={() => navigate('/notice')}>
            TF팀 공지 보러가기
          </S.TFButton>
          <img alt='blank' src={likelion} width='150px' />
          <S.P>
            이화여자대학교 웹 개발 동아리 <br />
            <div className='set'>
              <p className='green'>&lt;멋쟁이사자처럼&gt; </p>
              에서 제공하는
            </div>
            2023년 대동제 홈페이지입니다!
          </S.P>
          <S.LionButton
            href='https://www.instagram.com/likelion_ewha/'
            target='_blank'
          >
            이대 멋사 구경가기
          </S.LionButton>
        </S.AboutContainer>
        <br />
        <br />
        <br />
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Main;
