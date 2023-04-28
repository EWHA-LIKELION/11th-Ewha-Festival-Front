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
            <N.Text>{notice.text}</N.Text>
            <N.Time>update {notice.updated_at}</N.Time>
          </N.TextContainer>
        </N.Box>
      </N.Container>
    </COM.Wrapper>
  );
};

export default BoothDetailNotice;
