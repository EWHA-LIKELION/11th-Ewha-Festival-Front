import React, { useState, useEffect } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setPageNumber, setPageNumberInit } from '../../redux/pageSlice';
import { useAppSelector } from '../../redux/store';

const Pagination = props => {
  const dispatch = useDispatch();
  const { currentPage, totalPage, scrollToBooth } = props;
  const { booth_page_num } = useAppSelector(state => state.page);
  useEffect(() => {
    if (booth_page_num !== 1) scrollToBooth();
  }, [booth_page_num]);
  return (
    <Wrapper>
      <ArrowRect
        onClick={() =>
          currentPage === 1
            ? null
            : dispatch(setPageNumber({ booth_page_num: currentPage - 1 }))
        }
      >
        <BsFillCaretLeftFill
          className='arrow'
          fill={currentPage === 1 ? 'var(--gray3)' : 'var(--gray2)'}
        />
      </ArrowRect>
      <Text>{currentPage}</Text>
      <ArrowRect
        onClick={() =>
          currentPage === totalPage
            ? null
            : dispatch(setPageNumber({ booth_page_num: currentPage + 1 }))
        }
      >
        <BsFillCaretRightFill
          className='arrow'
          fill={currentPage === totalPage ? 'var(--gray3)' : 'var(--gray2)'}
        />
      </ArrowRect>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const ArrowRect = styled.div`
  display: flex;
  width: 30px;
  justify-content: center;
  align-items: center;
  .arrow:active {
    fill: var(--red);
  }
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;
