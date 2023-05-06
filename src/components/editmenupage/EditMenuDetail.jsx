import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// api
import { GetMenu, PatchMenu } from '../../api/booth';
import { useAppSelector } from '../../redux/store';

// component
import TopBar from '../_common/topbar/TopBar';

// style
import Switch from 'react-switch';
import { D } from './EditMenu.style';
import Footer from '../_common/footer/Footer';

const EditMenuDetail = () => {
  const { menuIndex } = useParams();
  const { booth_id } = useAppSelector(state => state.booth);
  const navigate = useNavigate();

  const [menu, setMenu] = useState('');
  const [price, setPrice] = useState(0);
  const [isSoldout, setIsSoldout] = useState(false);
  const [patchId, setPatchId] = useState(0);

  useEffect(() => {
    if (menuIndex) {
      GetMenu(booth_id)
        .then(res => {
          setMenu(res.data.data[menuIndex].menu);
          setPrice(res.data.data[menuIndex].price);
          setIsSoldout(res.data.data[menuIndex].is_soldout);
          setPatchId(res.data.data[menuIndex].id);
        })
        .catch(err => {});
    }
  }, []);

  const onSubmit = () => {
    if (menu && price) {
      PatchMenu(booth_id, patchId, menu, price, isSoldout).then(res => {});
      alert('메뉴 수정 성공');
      navigate('/mypage');
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
                onChange={() => setIsSoldout(!isSoldout)}
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
