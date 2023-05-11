import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
// redux
import { useAppSelector } from '../../redux/store';
// api
import { GetLikes, GetLikesAll, GetLikesAllNum } from '../../api/booth';

// component
import BoothComponent from '../boothpage/BoothComponent';
import MyFilterBar from './MyFilterBar';
import MyPagination from './MyPagination';

// style
import * as M from './MyMenu.style';

const MyLikedContainer = () => {
  // redux
  const {
    filter,
    filter_day,
    filter_location,
    filter_category,
    liked_page_num,
  } = useAppSelector(state => state.page);

  // 페이지네이션
  const [page, setPage] = useState(liked_page_num);
  const [totalPage, setTotalPage] = useState(0);
  // 부스 정보
  const [booth, setBooth] = useState([]);
  // 좋아요 갯수
  const [likeNum, setLikeNum] = useState(0);
  // 좋아요 변경 감지
  const [changeLike, setChangeLike] = useState('false');

  const getDay = () => {
    if (filter_day === '수') return 1;
    else if (filter_day === '목') return 2;
    else return 3;
  };

  const getCategory = () => {
    if (filter_category === '음식') return 1;
    else if (filter_category === '굿즈') return 3;
    else if (filter_category === '체험') return 2;
    else return 4;
  };

  //좋아요 개수 변경에 따른 렌더링
  useEffect(() => {
    GetLikesAllNum().then(res => {
      setLikeNum(res.data.total);
    });
  }, [changeLike]);

  const boothRef = useRef(null);
  const scrollToBooth = () => {
    boothRef.current.scrollIntoView({ behavior: 'instant' });
  };

  // 필터링 값 변경에 따른 get api
  useEffect(() => {
    switch (filter) {
      case 'all':
        GetLikesAll(liked_page_num).then(res => {
          setBooth(res.data.data);
          setTotalPage(res.data.total_page);
        });
      case 'day':
        GetLikes(filter, getDay(), liked_page_num).then(res => {
          setBooth(res.data.data);
          setTotalPage(res.data.total_page);
        });
        break;
      case 'location':
        GetLikes('college', filter_location, liked_page_num).then(res => {
          setBooth(res.data.data);
          setTotalPage(res.data.total_page);
        });
        break;
      case 'category':
        GetLikes(filter, getCategory(), liked_page_num).then(res => {
          setBooth(res.data.data);
          setTotalPage(res.data.total_page);
        });
        break;
    }
  }, [filter, filter_day, filter_location, filter_category, liked_page_num]);

  return (
    <>
      <M.ListContainer>
        <M.ManageTitle ref={boothRef}>좋아요한 부스 ({likeNum})</M.ManageTitle>
        <MyFilterBar />
      </M.ListContainer>
      <M.LikedGrid>
        {booth.map(props => (
          <BoothComponent
            key={props.id}
            {...props}
            booth={booth}
            setBooth={setBooth}
            setChangeLike={setChangeLike}
            changeLike={changeLike}
          />
        ))}
      </M.LikedGrid>
      {booth.length > 0 ? (
        <MyPagination
          currentPage={liked_page_num}
          totalPage={totalPage}
          scrollToBooth={scrollToBooth}
        />
      ) : null}
    </>
  );
};

export default MyLikedContainer;
