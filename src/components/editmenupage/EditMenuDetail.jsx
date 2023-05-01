import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// api
import { boothmenu } from '../../api/_mock/boothmock';

// component
import TopBar from '../_common/topbar/TopBar';

// style
import Switch from 'react-switch';
import { D } from './EditMenu.style';

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

  const onInput = e => {
    if (e.target.value.length > e.target.maxLength)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
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
              type='number'
              width='200px'
              value={price}
              maxLength='7'
              onInput={onInput}
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
