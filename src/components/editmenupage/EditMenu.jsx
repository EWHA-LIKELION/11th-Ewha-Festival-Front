import React, { useEffect, useState } from 'react';

// api
// import { GetBoothMenus } from '../../api/booth';
import { boothmenu } from '../../api/_mock/boothmock';

// component
import TopBar from '../_common/topbar/TopBar';
import EditMenuComponent from './EditMenuComponent';

// style
import { M } from './EditMenu.style';

const EditMenu = () => {
  const [getmenus, setGetmenus] = useState([]);
  const [boothId, setBoothId] = useState(0);
  useEffect(() => {
    // if (boothid) {
    //   GetBoothMenus(boothid).then(response => setMenus(response.data));
    // }
    setGetmenus(boothmenu.data);
    // GetBoothMenus(boothid).then(response => setGetmenus(response.data));
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
              price={props.price}
              is_soldout={props.is_soldout}
            />
          ))}
        </M.ComponentContainer>
      </M.Wrapper>
    </>
  );
};
export default EditMenu;
