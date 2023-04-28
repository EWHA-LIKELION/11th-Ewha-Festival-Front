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
      <C.Wrapper onClick={() => onClick(props.id)}>
        <div>
          <C.Menu>{props.menu}</C.Menu>
          <C.Price>{props.price}</C.Price>
        </div>
        <MdOutlineArrowForwardIos className='arrowIcons' />
      </C.Wrapper>
    </>
  );
};

export default EditMenuComponent;
