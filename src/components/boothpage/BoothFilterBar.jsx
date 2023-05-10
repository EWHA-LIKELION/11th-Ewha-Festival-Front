import React, { useState } from 'react';

// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  setFilterDay,
  setFilterLocation,
  setFilterCategory,
  setFilterViewer,
  setPageNumberInit,
} from '../../redux/pageSlice';
// data
import {
  dayData,
  locationData,
  categoryData,
} from '../../api/_mock/filtermock';

// style
import { F } from './Booth.style';

import viewerchecked from '../../assets/images/boothpage/viewerchecked2.svg';
import viewerchecked2 from '../../assets/images/boothpage/viewerchecked3.svg';

const BoothFilterBar = () => {
  // redux
  const { filter_day, filter_location, filter_category, filter_viewer } =
    useAppSelector(state => state.page);
  const dispatch = useAppDispatch();

  // 날짜 필터
  const saveFilterDay = option => {
    dispatch(setFilterDay({ filter_day: option }));
    dispatch(setPageNumberInit());
  };

  // 장소/카테고리 필터
  const saveFilterViewer = option => {
    dispatch(setFilterViewer({ filter_viewer: option }));
    dispatch(setPageNumberInit());
  };

  // 그 이하의 상세 필터
  const saveFilterDetail = option => {
    if (filter_viewer === 'location') {
      dispatch(setFilterLocation({ filter_location: option }));
      dispatch(setPageNumberInit());
    } else if (filter_viewer === 'category') {
      dispatch(setFilterCategory({ filter_category: option }));
      dispatch(setPageNumberInit());
    } else dispatch(setPageNumberInit());
  };
  // 상세 필터 함수형 컴포넌트
  const UnderBar = () => {
    return (
      <>
        <F.DataGrid>
          {filter_viewer === 'location'
            ? locationData.map(props => (
                <F.DataContainer
                  key={props}
                  checked={filter_location === props}
                  onClick={() => saveFilterDetail(props)}
                >
                  {props}
                </F.DataContainer>
              ))
            : filter_viewer === 'category'
            ? categoryData.map(props => (
                <F.DataContainer
                  key={props}
                  checked={filter_category === props}
                  onClick={() => saveFilterDetail(props)}
                >
                  {props}
                </F.DataContainer>
              ))
            : ''}
        </F.DataGrid>
      </>
    );
  };
  return (
    <>
      <F.DayFilterContainer>
        {dayData.map(props => (
          <F.DayContainer
            key={props.date}
            checked={filter_day === props.day}
            onClick={() => saveFilterDay(props.day)}
          >
            <div className='number'>{props.date}</div>
            <div className='day'>{props.day}요일</div>
          </F.DayContainer>
        ))}
      </F.DayFilterContainer>
      <br />
      {/* <F.ViewerFilterContainer>
        <F.ViewerContainer
          checked={filter_viewer === 'location'}
          onClick={() => saveFilterViewer('location')}
        >
          <img
            className='check'
            src={viewerchecked}
            checked={filter_viewer === 'location'}
          />
          <div className='text'>장소별 보기</div>
        </F.ViewerContainer>
        <F.ViewerContainer
          checked={filter_viewer === 'category'}
          onClick={() => saveFilterViewer('category')}
        >
          <img
            className='check'
            src={viewerchecked2}
            width='100%'
            checked={filter_viewer === 'location'}
          />
          <div className='text'>카테고리별 보기</div>
        </F.ViewerContainer>
        <F.ViewerContainer
          checked={filter_viewer === 'all'}
          onClick={() => saveFilterViewer('all')}
        >
          <img
            className='check'
            src={viewerchecked}
            checked={filter_viewer === 'location'}
          />
          <div className='text'>전체 보기</div>
        </F.ViewerContainer>
      </F.ViewerFilterContainer> */}
      <UnderBar />
    </>
  );
};

export default BoothFilterBar;
