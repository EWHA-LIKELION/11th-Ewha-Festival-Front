import React, { useState } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  setFilter,
  setFilterDay,
  setFilterLocation,
  setFilterCategory,
} from '../../redux/pageSlice';
// style.js
import * as S from './MyMenu.style';
// data
import {
  dayData,
  locationData,
  categoryData,
} from '../../api/_mock/filtermock';

const MyFilterBar = () => {
  // redux
  const dispatch = useAppDispatch();
  const { filter, filter_day, filter_location, filter_category } =
    useAppSelector(state => state.page);

  const saveFilter = option => {
    dispatch(setFilter({ filter: option }));
  };
  // 선택 관리용
  const [day, setDay] = useState(filter_day !== '' ? filter_day : '수');
  const [location, setLocation] = useState(
    filter_location !== '' ? filter_location : '정문',
  );
  const [category, setCategory] = useState(
    filter_category !== '' ? filter_category : '음식',
  );

  const saveFilter_detail = option => {
    switch (filter) {
      case 'day':
        dispatch(setFilterDay({ filter_day: option }));
        setDay(option);
        break;
      case 'location':
        dispatch(setFilterLocation({ filter_location: option }));
        setLocation(option);
        break;
      case 'category':
        dispatch(setFilterCategory({ filter_category: option }));
        setCategory(option);
        break;
    }
  };
  const DayBar = () => {
    return (
      <>
        {dayData.map(data => (
          <div
            key={data.date}
            id={data.day}
            className={day === data.day ? 'active1' : ''}
            style={{ width: '27%' }}
            onClick={() => {
              saveFilter_detail(data.day);
            }}
          >
            {data.date}일 {data.day}요일
          </div>
        ))}
      </>
    );
  };
  const LocationBar = () => {
    return (
      <>
        {locationData.map(data => (
          <div
            key={data}
            id={data}
            className={location === data ? 'active2' : ''}
            style={{ width: '19%' }}
            onClick={() => {
              saveFilter_detail(data);
            }}
          >
            {data}
          </div>
        ))}
      </>
    );
  };
  const CategoryBar = () => {
    return (
      <>
        {categoryData.map(data => (
          <div
            key={data}
            id={data}
            className={category === data ? 'active3' : ''}
            style={{ width: '19%' }}
            onClick={() => {
              saveFilter_detail(data);
            }}
          >
            {data}
          </div>
        ))}
      </>
    );
  };
  return (
    <S.BarWrapper>
      <S.SelectFilter>
        <div
          onClick={() => saveFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          전체
        </div>
        <div>·</div>
        <div
          onClick={() => saveFilter('day')}
          className={filter === 'day' ? 'active' : ''}
        >
          날짜
        </div>
        <div>·</div>
        <div
          onClick={() => saveFilter('location')}
          className={filter === 'location' ? 'active' : ''}
        >
          장소
        </div>
        <div>·</div>
        <div
          onClick={() => saveFilter('category')}
          className={filter === 'category' ? 'active' : ''}
        >
          카테고리
        </div>
      </S.SelectFilter>
      <S.SelectFilter_Detail>
        {filter === 'day' ? (
          <DayBar />
        ) : filter === 'location' ? (
          <LocationBar />
        ) : filter === 'category' ? (
          <CategoryBar />
        ) : null}
      </S.SelectFilter_Detail>
    </S.BarWrapper>
  );
};
export default MyFilterBar;
