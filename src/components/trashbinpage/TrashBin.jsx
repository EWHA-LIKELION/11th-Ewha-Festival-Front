import { useState } from 'react';
// style.js
import * as S from './TrashBin.style';
//component
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';
import pinbtn from '../../assets/images/trashbinpage/pin.svg';

import { locationData, photoData } from '../../api/_mock/trashbinmock';

const TrashBin = () => {
  const [trashs, setTrashs] = useState(locationData);
  const [trashname, setTrashname] = useState('정문');
  const [trashinfo, setTrashinfo] = useState('정문 24번 부스 옆');
  const [pickedId, setId] = useState(5);

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
                  src={pinbtn}
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
                  src={pinbtn}
                  onClick={() => selectPla(trash.id)}
                />
              );
            }
          })}
        </S.MapBox>
        <S.LocationBox>
          <S.LocationImg data={photoData[pickedId - 1]} />
          <S.LocationInfo>
            <p className='name'>{trashname}</p>
            <p className='info'>{trashinfo}</p>
          </S.LocationInfo>
        </S.LocationBox>
      </S.Container>
      <Footer />
    </>
  );
};
export default TrashBin;
