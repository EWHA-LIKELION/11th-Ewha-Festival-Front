import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// api
import { boothmenu } from '../../api/_mock/boothmock';

// component
import TopBar from '../_common/topbar/TopBar';

// style
import Switch from 'react-switch';
import { D } from './EditMenu.style';
import { GetMenu, PatchMenu } from '../../api/booth';
import { useAppSelector } from '../../redux/store';

const EditMenuDetail = () => {
  const { menuId } = useParams();
  const { booth_id } = useAppSelector(state => state.booth);
  const navigate = useNavigate();

  const [menu, setMenu] = useState('');
  const [price, setPrice] = useState(0);
  const [isSoldout, setIsSoldout] = useState(false);

  const menus = {
    message: '메뉴 목록 조회 성공',
    data: [
      {
        id: 1,
        menu: '순대',
        price: 4000,
        is_soldout: false,
      },
      {
        id: 3,
        menu: '떡볶이',
        price: 3000,
        is_soldout: false,
      },
      {
        id: 4,
        menu: '튀김',
        price: 3000,
        is_soldout: false,
      },
    ],
  };

  useEffect(() => {
    if (menuId) {
      GetMenu(menuId).then(res => {
        console.log(res.data.data);
        setMenu(res.data.data[menuId - 1].menu);
        setPrice(res.data.data[menuId - 1].price);
        setIsSoldout(res.data.data[menuId - 1].isSoldout);
      });
    }
  }, []);

  const onSubmit = () => {
    if (menu && price) {
      PatchMenu(booth_id, menuId, menu, price, isSoldout).then(res =>
        console.log(res),
      );
      alert(menu, price, isSoldout);
      alert('메뉴 수정 성공');
      navigate(-1);
    } else {
      alert('메뉴와 가격을 입력해주세요');
    }
  };

  return (
    <>
      <D.Wrapper>
        <TopBar title='메뉴 정보 수정' />
        <D.ComponentContainer>
          <D.Title>메뉴 이름</D.Title>

          <D.Input
            type='text'
            value={menu}
            maxLength='15'
            onChange={e => setMenu(e.target.value)}
          />
          <D.Title>가격</D.Title>
          <D.PriceContainer>
            <D.Input
              type='text'
              width='200px'
              value={price}
              pattern='\d*'
              maxLength='7'
              onChange={e => setPrice(e.target.value)}
            />
            <D.SoldoutContainer>
              <div style={{ marginRight: '8px' }}>Sold Out</div>
              <Switch
                onChange={e => setIsSoldout(!isSoldout)}
                checked={isSoldout}
                offHandleColor='#ffffff'
                onHandleColor='#ffffff'
                uncheckedIcon={false}
                checkedIcon={false}
                handleDiameter={24}
                width={40}
                height={24}
              />
            </D.SoldoutContainer>
          </D.PriceContainer>
          <D.ButtonWrapper>
            <D.Button type='cancel' onClick={() => navigate(-1)}>
              취소
            </D.Button>
            <D.Button type='submit' onClick={() => onSubmit()}>
              완료
            </D.Button>
          </D.ButtonWrapper>
        </D.ComponentContainer>
      </D.Wrapper>
    </>
  );
};

export default EditMenuDetail;
