import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { http } from '../../api/http';
// redux
import { useAppSelector } from '../../redux/store';
// api  & mock
import { GetLikes } from '../../api/booth';
import { likedListmock } from '../../api/_mock/likedListmock';
// style.js, component
import * as S from './MyMenu.style';
import BoothComponent from '../boothpage/BoothComponent';

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
  const getLiked = () => {
    http.get('/accounts/likes/?day=1').then(res => {
      console.log(res);
    });
  };
  useEffect(() => {
    getLiked();
  }, []);
  return (
    <S.LikedList>
      {/* <div onClick={() => getLiked()}>받아오기</div> */}
      {list.map(list => {
        return (
          <S.LikedBooth>
            <S.BoothImg url={list.thumnail} />
            <div>
              <S.BoothLocation>
                {list.college[0]}
                {list.number < 10 ? '0' + list.number : list.number} ·{' '}
                {list.category}
              </S.BoothLocation>
              <S.Heart />
            </div>

            <S.BoothName>{list.name}</S.BoothName>
            <S.BoothHashTag>{list.hashtag}</S.BoothHashTag>
          </S.LikedBooth>
        );
      })}
    </S.LikedList>
  );
};
export default MyLikedList;
