import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// redux
import { useAppSelector } from '../../redux/store';
// api  & mock
import { GetLikes } from '../../api/booth';
import { likedListmock } from '../../api/_mock/likedListmock';
// style.js, component
import * as S from './MyMenu.style';

const MyLikedList = () => {
  // 좋아요 정보
  const [list, setList] = useState([]);
  // page redux
  const { filter, filter_day, filter_location, filter_category } =
    useAppSelector(state => state.page);
  // 첫 get api
  useEffect(() => {
    switch (filter) {
      case 'day':
        // setList(GetLikes(filter, filter_day));
        setList(likedListmock.data);
        break;
      case 'location':
        // setList(GetLikes(filter, filter_location));
        setList(likedListmock.data);
        break;
      case 'category':
        // setList(GetLikes(filter, filter_category));
        setList(likedListmock.data);
        break;
    }
  }, []);
  return (
    <S.LikedList>
      {list.map(list => {
        return (
          <S.LikedBooth>
            <S.BoothImg href={list.thumnail} />
            <S.BoothLocation>
              {list.college[0]}
              {list.number < 10 ? '0' + list.number : list.number} ·{' '}
              {list.category}
            </S.BoothLocation>
            <S.BoothName>{list.name}</S.BoothName>
          </S.LikedBooth>
        );
      })}
    </S.LikedList>
  );
};
export default MyLikedList;
