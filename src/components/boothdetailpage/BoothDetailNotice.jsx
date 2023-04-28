import React from 'react';

import { COM, N } from './BoothDetail.style';
import { AiOutlineNotification } from 'react-icons/ai';

const BoothDetailNotice = ({ notice }) => {
  return (
    <COM.Wrapper>
      <N.Container>
        <N.Box>
          <AiOutlineNotification fill='var(--green1)' size='25' />
          <N.TextContainer>
            <N.Title>실시간 공지사항</N.Title>
            <N.Text>
              저희 부스 오늘 떡꼬치 됐습니다~저희 부스 오늘 떡꼬치 재료소진
              됐습니다~저희 부스 떡꼬치 재료소진 됐습니다~저희 부스 오늘 떡꼬치
              재료소진 됐습니다~저희 부스dkdkdkkkdk
            </N.Text>
            <N.Time>update 5/10 14:39</N.Time>
          </N.TextContainer>
        </N.Box>
      </N.Container>
    </COM.Wrapper>
  );
};

export default BoothDetailNotice;
