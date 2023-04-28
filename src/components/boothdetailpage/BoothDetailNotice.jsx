import React, { useEffect, useState } from 'react';

import { COM, N } from './BoothDetail.style';
import { AiOutlineNotification } from 'react-icons/ai';

const BoothDetailNotice = props => {
  const [notice, setNotice] = useState({
    text: '아직 공지사항이 없습니다.',
    updated_at: '',
  });
  useEffect(() => {
    if (props.notice) {
      setNotice({
        text: props.notice.text,
        updated_at: props.notice.updated_at,
      });
    }
  }, [props]);
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
