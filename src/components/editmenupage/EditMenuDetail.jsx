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
import Footer from '../_common/footer/Footer';

const EditMenuDetail = () => {
  const { menuId } = useParams();
  const { booth_id } = useAppSelector(state => state.booth);
  const navigate = useNavigate();

  const [menu, setMenu] = useState('');
  const [price, setPrice] = useState(0);
  const [isSoldout, setIsSoldout] = useState(false);

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
            <div className='price'>
              <D.Input
                type='text'
                width='150px'
                value={price}
                pattern='\d*'
                maxLength='7'
                onChange={e => setPrice(e.target.value)}
              />
              <div className='text'>원</div>
            </div>
            <D.SoldoutContainer>
              <div className='text'>Sold Out</div>
              <Switch
                onChange={e => setIsSoldout(!isSoldout)}
                checked={isSoldout}
                offHandleColor='#ffffff'
                onHandleColor='#ffffff'
                uncheckedIcon={false}
                checkedIcon={false}
                handleDiameter={20}
                width={36}
                height={20}
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
      <Footer />
    </>
  );
};

export default EditMenuDetail;
