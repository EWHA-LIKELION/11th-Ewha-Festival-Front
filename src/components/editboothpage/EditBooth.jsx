import React, { useEffect, useState } from 'react';
import { B } from './EditBooth.style';
import TopBar from '../_common/topbar/TopBar';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import {
  GetBooth,
  PatchBooth,
  PatchBoothNotice,
  PatchBoothTime,
} from '../../api/booth';
import Footer from '../_common/footer/Footer';

const EditBooth = () => {
  const navigate = useNavigate();
  const { booth_id } = useAppSelector(state => state.booth);

  const [name, setName] = useState('');
  const [notice, setNotice] = useState('');
  const [description, setDescription] = useState('');
  const [time0, setTime0] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [opened, setOpened] = useState(true);

  const [day1, setDay1] = useState('');
  const [day2, setDay2] = useState('');
  const [day3, setDay3] = useState('');

  useEffect(() => {
    if (booth_id !== null)
      GetBooth(booth_id).then(res => {
        setName(res.data.data.name);
        setNotice(res.data.data.notices[0].content);
        setDescription(res.data.data.description);
        setTime0(res.data.data.times[0].time);
        setTime1(res.data.data.times[1].time);
        setTime2(res.data.data.times[2].time);
        setDay1(res.data.data.times[0].time);
        setDay2(res.data.data.times[1].time);
        setDay3(res.data.data.times[2].time);
        setOpened(res.data.data.opened);
      });
  }, []);

  const onSubmit = () => {
    if (!name) alert('부스 이름은 필수 정보입니다');
    else if (day1 && time0 == '') {
      alert('운영 시간은 필수 정보입니다');
    } else if (day2 && time1 == '') {
      alert('운영 시간은 필수 정보입니다');
    } else if (day3 && time2 == '') {
      alert('운영 시간은 필수 정보입니다');
    } else {
      PatchBooth(booth_id, name, opened, description).then(res => {
        console.log(res);
      });
      PatchBoothNotice(booth_id, notice).then(res => console.log(res));
      if (day1) {
        PatchBoothTime(booth_id, 1, time0).then(res => {});
      }
      if (day2) {
        PatchBoothTime(booth_id, 2, time1).then(res => {});
      }
      if (day3) {
        PatchBoothTime(booth_id, 3, time2).then(res => {});
      }
      alert('부스 수정 완료');
      navigate(-1);
    }
  };

  return (
    <>
      <B.Wrapper>
        <TopBar title='부스 정보 수정' />
        <B.ComponentContainer>
          <B.Title>부스 이름</B.Title>
          <B.Input
            placeholder='부스 이름'
            value={name}
            type='text'
            maxLength={26}
            onChange={e => setName(e.target.value)}
          />
          <B.Title>실시간 부스 공지사항</B.Title>
          <B.TextArea
            placeholder='실시간 부스 공지사항'
            value={notice}
            type='text'
            maxLength={100}
            onChange={e => setNotice(e.target.value)}
          />
          <B.Title>부스 소개</B.Title>
          <B.TextArea
            placeholder='부스 소개'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <B.Title>부스 운영시간</B.Title>
          {day1 ? (
            <>
              <B.TimeWrapper>
                <B.Day>수</B.Day>
                <B.TimeArea
                  placeholder='수요일 운영시간'
                  value={time0}
                  onChange={e => setTime0(e.target.value)}
                  maxLength={20}
                  type='text'
                />
              </B.TimeWrapper>
            </>
          ) : (
            ''
          )}
          {day2 ? (
            <>
              <B.TimeWrapper>
                <B.Day>목</B.Day>
                <B.TimeArea
                  placeholder='목요일 운영시간'
                  value={time1}
                  onChange={e => setTime1(e.target.value)}
                  maxLength={20}
                  type='text'
                />
              </B.TimeWrapper>
            </>
          ) : (
            ''
          )}
          {day3 ? (
            <>
              <B.TimeWrapper>
                <B.Day>금</B.Day>
                <B.TimeArea
                  placeholder='금요일 운영시간'
                  value={time2}
                  onChange={e => setTime2(e.target.value)}
                  maxLength={20}
                  type='text'
                />
              </B.TimeWrapper>
            </>
          ) : (
            ''
          )}
          <B.Title>운영 여부</B.Title>
          <B.OpenWrapper>
            <input
              type='radio'
              id='open'
              onChange={() => setOpened(!opened)}
              checked={opened}
            />
            <B.Label htmlFor='open'>운영 중</B.Label>
            <input
              type='radio'
              id='closed'
              value={false}
              onChange={() => setOpened(!opened)}
              checked={!opened}
            />
            <B.Label htmlFor='closed'>운영 종료</B.Label>
          </B.OpenWrapper>
          <B.ButtonWrapper>
            <B.Button type='cancel' onClick={() => navigate(-1)}>
              취소
            </B.Button>
            <B.Button type='submit' onClick={() => onSubmit()}>
              완료
            </B.Button>
          </B.ButtonWrapper>
        </B.ComponentContainer>
        <br />
        <br />
      </B.Wrapper>

      <Footer />
    </>
  );
};

export default EditBooth;
