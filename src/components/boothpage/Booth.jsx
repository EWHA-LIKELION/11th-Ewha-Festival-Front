import React, { useEffect, useState } from 'react';

// redux
import { useAppDispatch, useAppSelector } from '../../redux/store';
// api
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
import { useMap } from '../boothdetailpage/useMap';
import Footer from '../_common/footer/Footer';

const Booth = () => {
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

  // get api
  useEffect(() => {
    if (filter_viewer === 'location') {
      GetLocationBooth(getDay(), filter_location).then(res => {
        setBooth(res.data.data);
        setLength(res.data.data.length);
      });
    } else if (filter_viewer === 'category') {
      GetCategoryBooth(getDay(), getCategory()).then(res => {
        setBooth(res.data.data);
        setLength(res.data.data.length);
      });
    } else {
      GetAllBooth().then(res => {
        setBooth(res.data.data);
        setLength(res.data.data.length);
      });
    }
  }, [filter_day, filter_location, filter_category, filter_viewer]);

  const mapSrc = useMap(filter_location);
  return (
    <>
      <B.Wrapper>
        <TopBar title='부스 목록' />
        <BoothFilterBar />
        {filter_viewer === 'location' ? (
          <B.MapContainer>
            <img src={mapSrc} />
          </B.MapContainer>
        ) : (
          ''
        )}

        <B.BoothLength>총 {length}개의 부스</B.BoothLength>
        <B.ComponentGrid>
          {booth.map(props => (
            <BoothComponent
              key={props.id}
              {...props}
              booth={booth}
              setBooth={setBooth}
            />
          ))}
        </B.ComponentGrid>
      </B.Wrapper>
      <Footer />
    </>
  );
};

export default Booth;
