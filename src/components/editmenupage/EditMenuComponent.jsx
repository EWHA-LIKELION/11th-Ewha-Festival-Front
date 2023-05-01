import React from 'react';
import { C } from './EditMenu.style';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const EditMenuComponent = props => {
  const navigate = useNavigate();
  const onClick = id => {
    console.log(id);
    navigate(`/mypage/editmenu/${id}`);
  };

  return (
    <>
      <C.ComponentWrapper onClick={() => onClick(props.id)}>
        <C.ContentWrapper>
          <C.Menu>{props.menu}</C.Menu>
          <C.Price>{props.price}원</C.Price>
        </C.ContentWrapper>
        <MdOutlineArrowForwardIos className='arrowIcons' />
      </C.ComponentWrapper>
    </>
  );
};

export default EditMenuComponent;
