import React, { useEffect, useState } from 'react';
// import { GetBoothMenus } from '../../api/booth';
import EditMenuComponent from './EditMenuComponent';
import { boothmenu } from '../../api/_mock/boothmock';

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
      {getmenus.map(props => (
        <EditMenuComponent
          key={props.id}
          id={props.id}
          menu={props.menu}
          price={props.price}
          is_soldout={props.is_soldout}
        />
      ))}
    </>
  );
};
export default EditMenu;
