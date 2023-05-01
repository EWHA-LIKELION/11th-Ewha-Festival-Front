import React, { useEffect, useState } from 'react';

// api
import { getbooths } from '../../api/_mock/boothmock';
// component
import TopBar from '../_common/topbar/TopBar';

// style
import { B } from './Booth.style';
import { useAppSelector } from '../../redux/store';
import BoothComponent from './BoothComponent';

const Booth = () => {
  // 리덕스 통해 변경값 계속해서 받아오기
  // const { booth_id } = useAppSelector(state => state.booth);

  const [booths, setBooths] = useState([]);

  // 처음에 받아오는 booth 목록
  useEffect(() => {
    // 만약 response가 있다면
    setBooths(getbooths.data);
  }, []);
  return (
    <>
      <B.Wrapper>
        <TopBar title='부스 목록' />
        <B.ComponentGrid>
          {booths.map(props => (
            <BoothComponent key={props.id} {...props} />
          ))}
        </B.ComponentGrid>
      </B.Wrapper>
    </>
  );
};

export default Booth;
