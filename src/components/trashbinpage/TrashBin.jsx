import { useState } from 'react';
// style.js
import * as S from './TrashBin.style';
//component
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';

import { locationData, photoData } from '../../api/_mock/trashbinmock';

const TrashBin = () => {
  const [trashs, setTrashs] = useState(locationData);
  const [trashname, setTrashname] = useState('학생문화관 쓰레기통 위치');
  const [trashinfo, setTrashinfo] = useState(
    '학생문화관 1층 출입구 우측\n학생문화관 숲 중간 통로 옆\n학생문화관 - ECC 연결 보도 안쪽',
  );
  const [pickedId, setId] = useState(3);

  const selectPla = id => {
    setTrashs(
      trashs.map(trash =>
        id === trash.id
          ? { ...trash, selected: true }
          : { ...trash, selected: false },
      ),
    );
    setTrashname(locationData[id - 1].name);
    setTrashinfo(locationData[id - 1].info);
    setId(id);
  };

  return (
    <>
      <S.Container>
        <TopBar title='쓰레기통 위치' />
        <S.MapBox>
          {trashs.map(trash => {
            if (trash.selected === true) {
              return (
                <S.Pin
                  key={trash.id}
                  top={trash.top}
                  left={trash.left}
                  onClick={() => selectPla(trash.id)}
                  selected
                />
              );
            } else {
              return (
                <S.Pin
                  key={trash.id}
                  top={trash.top}
                  left={trash.left}
                  onClick={() => selectPla(trash.id)}
                />
              );
            }
          })}
        </S.MapBox>
        <S.LocationBox>
          <S.LocationTitle>{trashname}</S.LocationTitle>
          <S.LocationImg data={photoData[pickedId - 1]} />
          <S.LocationInfo padding={pickedId === 3 ? 20 : 0}>
            {trashinfo}
          </S.LocationInfo>
        </S.LocationBox>
      </S.Container>
      <Footer />
    </>
  );
};
export default TrashBin;
