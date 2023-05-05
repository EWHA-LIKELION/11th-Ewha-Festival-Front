import React, { useEffect, useState } from 'react';
import * as S from './Search.style';
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';
import searchicon from '../../assets/images/searchpage/searchicon.png';
import { GetSearchBooth } from '../../api/booth';
import BoothComponent from '../boothpage/BoothComponent';

// import { getbooths } from '../../api/_mock/boothmock';

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [booth, setBooth] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    setKeyword("'" + inputText + "'에 대한 검색 결과");
    if (inputText) {
      GetSearchBooth(inputText)
        .then(res => {
          setBooth(res.data.data);
        })
        .catch(err => console.log(err));
    } else {
      setBooth([]);
      setKeyword('');
    }
  };

  return (
    <>
      <S.Wrapper>
        <TopBar title='부스 검색'></TopBar>

        <S.InputContainer onSubmit={onSubmit}>
          <S.Input
            placeholder='부스 또는 메뉴 이름을 검색하세요'
            type='text'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <button type='submit'>
            <img src={searchicon} width='16px' height='16px' />
          </button>
        </S.InputContainer>
        <S.TextContainer>
          <div>{keyword}</div>
          <div>총 {booth.length}개의 부스</div>
        </S.TextContainer>
        <S.ComponentGrid>
          {booth.map(props => (
            <BoothComponent
              key={props.id}
              {...props}
              booth={booth}
              setBooth={setBooth}
            />
          ))}
        </S.ComponentGrid>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Search;
