import React, { useEffect, useState } from 'react';

// api
// import { GetBoothMenus } from '../../api/booth';
import { boothmenu } from '../../api/_mock/boothmock';

// component
import TopBar from '../_common/topbar/TopBar';
import EditMenuComponent from './EditMenuComponent';

// style
import { M } from './EditMenu.style';
import { useAppSelector } from '../../redux/store';
import { GetMenu } from '../../api/booth';

const EditMenu = () => {
  const { booth_id } = useAppSelector(state => state.booth);
  const [getmenus, setGetmenus] = useState([]);
  useEffect(() => {
    if (booth_id !== null) {
      GetMenu(booth_id).then(res => {
        setGetmenus(res.data.data);
      });
    }
  }, []);
  return (
    <>
      <M.Wrapper>
        <TopBar title='메뉴 정보 수정' />
        <M.ComponentContainer>
          <M.Content>수정할 메뉴를 선택하세요</M.Content>
          {getmenus.map(props => (
            <EditMenuComponent
              key={props.id}
              id={props.id}
              menu={props.menu}
              price={props.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              is_soldout={props.is_soldout}
            />
          ))}
        </M.ComponentContainer>
      </M.Wrapper>
    </>
  );
};
export default EditMenu;
