import React, { useEffect, useState } from 'react';
// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
// api
import { getbooths } from '../../api/_mock/boothmock';
import { GetLikes, GetLikesAll } from '../../api/booth';

// component
import BoothComponent from '../boothpage/BoothComponent';
import MyFilterBar from './MyFilterBar';
import BoothFilterBar from '../boothpage/BoothFilterBar';

// style
import { B } from '../boothpage/Booth.style';
import * as M from './MyMenu.style';
import { useMap } from '../boothdetailpage/useMap';
import Footer from '../_common/footer/Footer';

const MyLikedContainer = () => {
  // redux
  const { filter, filter_day, filter_location, filter_category } =
    useAppSelector(state => state.page);

  // 부스 정보
  const [booth, setBooth] = useState([]);
  // 좋아요 갯수
  const [likeNum, setLikeNum] = useState(0);

  const getDay = () => {
    if (filter_day === '수') return 1;
    else if (filter_day === '목') return 2;
    else return 3;
  };

  const getCategory = () => {
    if (filter_category === '음식') return 1;
    else if (filter_category === '굿즈') return 2;
    else if (filter_category === '체험') return 3;
    else return 4;
  };

  // 초기 렌더링
  useEffect(() => {
    GetLikesAll().then(res => {
      setLikeNum(res.data.data.length);
    });
  }, []);
  // 필터링 값 변경에 따른 get api
  useEffect(() => {
    switch (filter) {
      case 'day':
        GetLikes(filter, getDay()).then(res => {
          setBooth(res.data.data);
        });
        break;
      case 'location':
        GetLikes('college', filter_location).then(res => {
          setBooth(res.data.data);
        });
        break;
      case 'category':
        GetLikes(filter, getCategory()).then(res => {
          setBooth(res.data.data);
        });
        break;
    }
  }, [filter, filter_day, filter_location, filter_category]);

  return (
    <>
      <M.ListContainer>
        <M.ManageTitle>좋아요한 부스 ({likeNum})</M.ManageTitle>
        <MyFilterBar />
        <M.LikedGrid>
          {booth.map(props => (
            <BoothComponent
              key={props.id}
              {...props}
              booth={booth}
              setBooth={setBooth}
            />
          ))}
        </M.LikedGrid>
      </M.ListContainer>
    </>
  );
};

export default MyLikedContainer;
