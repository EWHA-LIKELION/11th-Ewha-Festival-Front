import React, { useEffect, useState } from 'react';
import * as S from './Search.style';
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';
import searchicon from '../../assets/images/searchpage/searchicon.png';
import { GetSearchBooth } from '../../api/booth';

import { getbooths } from '../../api/_mock/boothmock';

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [booth, setBooth] = useState([]);

  const onSubmit = () => {
    setKeyword("'" + inputText + "'");
    GetSearchBooth(keyword)
      .then(res => {
        console.log(res);
        setBooth(getbooths);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <S.Wrapper>
        <TopBar title='부스 정보 검색'></TopBar>
        <S.InputContainer>
          <S.Input
            placeholder='부스를 검색하세요'
            type='text'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <img
            onClick={() => onSubmit()}
            src={searchicon}
            width='16px'
            height='16px'
          />
        </S.InputContainer>

        <S.TextContainer>
          <div>{keyword}에 대한 검색결과</div>
          <div>총 2개의 부스</div>
        </S.TextContainer>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Search;
