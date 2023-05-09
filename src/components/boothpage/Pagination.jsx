import React, { useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setPageNumber, setPageNumberInit } from '../../redux/pageSlice';
import { useEffect } from 'react';
import { useAppSelector } from '../../redux/store';

const Pagination = props => {
  const dispatch = useDispatch();

  const { currentPage, totalPage } = props;

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
          fill={currentPage === totalPage ? 'var(--gray3)' : 'var(--gray2)'}
        />
      </ArrowRect>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  width: 18%;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
  height: 30px;
`;

const ArrowRect = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 1rem;
`;
