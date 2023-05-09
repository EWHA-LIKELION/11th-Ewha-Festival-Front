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
      {/* {isChecked === 'true' ? (
        ''
      ) : (
        <AdModal submit={checked => modalSubmit(checked)} />
      )} */}
      <AdModal />
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
          <img alt='blank' className='date1' src={date1} />
          <div className='box1'>
            {event1.map(props => (
              <List key={props.id} {...props} />
            ))}
          </div>
        </S.Event>
        <S.Event>
          <img alt='blank' src={b2} />
          <img alt='blank' className='date2' src={date2} />
          <div className='box2'>
            {event2.map(props => (
              <List key={props.id} {...props} />
            ))}
          </div>
        </S.Event>
        <S.Event>
          <img alt='blank' src={b3} />
          <img alt='blank' className='date3' src={date3} />
          <div className='box3'>
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
          <S.P>
            이화여자대학교는 국가와 인류사회 발전에 공헌하는 <br />
            여성 리더 양성을 목적으로 건립된 한국 최초의 여학교이자 <br /> 한국
            최초의 종합대학입니다. <br />
            <br />
            2023년, 이화여자대학교 개교 137주년을 맞아 <br />
            <div className='set'>
              <p className='green'>대동제 ‘이웃: 이화와 함께 웃다’</p>를
              개최합니다.
            </div>
            <br />
            <br />
            이웃제는 이화인 간의 화합과 연대, 학생활동의 활성화,
            <br /> 사회적 가치를 추구하는 대학 축제 문화 선도의 <br /> 세 가지
            목표를 가지고 진행됩니다.
            <br />
            <br />
            이화인 한솥밥, 영산 줄다리기, ‘EWHA’S TURNTABLE’, <br /> 학생 부스
            및 동아리 공연 등 <br />
            다채로운 프로그램이 기획되어 있습니다. <br />
            <br />
            이웃제에서 벗들과 함께 이화의 웃음을 <br /> 만들고, 나누고, 지키며
            행복한 시간 보내시길 바랍니다.
          </S.P>
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
