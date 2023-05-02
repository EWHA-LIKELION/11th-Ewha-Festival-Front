import React, { useEffect, useState } from 'react';

// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
// api
import { getbooths } from '../../api/_mock/boothmock';
import {
  GetLocationBooth,
  GetCategoryBooth,
  GetAllBooth,
} from '../../api/booth';
// import { dayData } from './mock';
// import { locationData } from './mock';
// import { categoryData } from './mock';

// component
import TopBar from '../_common/topbar/TopBar';
import BoothComponent from './BoothComponent';
import BoothFilterBar from './BoothFilterBar';

// style
import { B } from './Booth.style';

const Booth = () => {
  const booths = getbooths.data;

  // redux
  const { filter_day, filter_location, filter_category, filter_viewer } =
    useAppSelector(state => state.page);

  // state
  const [booth, setBooth] = useState([]);
  const [length, setLength] = useState(0);

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

  // get first api
  // useEffect(() => {
  //   GetAllBooth().then(res => {
  //     console.log(res.data.data);
  //     setBooth(res.data.data);
  //   });
  // }, []);

  // get api
  useEffect(() => {
    if (filter_viewer === 'location') {
      GetLocationBooth(getDay(), filter_location).then(res => {
        setBooth(res.data.data);
        setLength(res.data.data.length);
      });
    } else {
      GetCategoryBooth(getDay(), getCategory()).then(res => {
        setBooth(res.data.data);
        setLength(res.data.data.length);
      });
    }
  }, [filter_day, filter_location, filter_category, filter_viewer]);

  return (
    <>
      <B.Wrapper>
        <TopBar title='부스 목록' />
        <BoothFilterBar />
        <B.BoothLength>총 {length} 개의 부스</B.BoothLength>
        <B.ComponentGrid>
          {booth.map(props => (
            <BoothComponent key={props.id} {...props} />
          ))}
        </B.ComponentGrid>
      </B.Wrapper>
    </>
  );
};

export default Booth;
