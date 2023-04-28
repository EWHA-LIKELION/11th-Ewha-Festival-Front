import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Switch from 'react-switch';
import { boothmenu } from '../../api/_mock/boothmock';
import { C } from './EditMenu.style';

const EditMenuDetail = () => {
  const { menuId } = useParams();
  const navigate = useNavigate();

  const [menu, setMenu] = useState('');
  const [price, setPrice] = useState(0);
  const [isSoldout, setIsSoldout] = useState(false);

  useEffect(() => {
    if (menuId) {
      setMenu(boothmenu.data[menuId - 1].menu);
      setPrice(boothmenu.data[menuId - 1].price);
      setIsSoldout(boothmenu.data[menuId - 1].is_soldout);
    }
  }, []);

  const onSubmit = () => {
    if (menu && price) {
      // api 패치 코드
    } else {
      alert('메뉴와 가격을 입력해주세요');
    }
  };
  return (
    <>
      <input
        type='text'
        value={menu}
        maxLength='15'
        onChange={e => setMenu(e.target.value)}
      />
      <input
        type='text'
        value={price}
        pattern='\d*'
        maxLength='7'
        onChange={e => setPrice(e.target.value)}
      />
      <div>
        <span>Sold out</span>
        <Switch
          onChange={e => setIsSoldout(!isSoldout)}
          checked={isSoldout}
          offHandleColor='#ffffff'
          onHandleColor='#ffffff'
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={24}
          width={48}
          height={24}
        />
      </div>
      <C.Button type='cancel' onClick={() => navigate(-1)}>
        취소
      </C.Button>
      <C.Button type='submit' onClick={() => onSubmit()}>
        완료
      </C.Button>
    </>
  );
};

export default EditMenuDetail;
