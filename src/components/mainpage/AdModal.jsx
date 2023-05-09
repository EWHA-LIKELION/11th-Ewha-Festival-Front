import React, { useEffect, useState } from 'react';
import { M } from './AdModal.style';
import graycheck from '../../assets/images/mainpage/graycheck.svg';
import greencheck from '../../assets/images/mainpage/greencheck.svg';

const AdModal = props => {
  const { submit, type } = props;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <M.Container>
        <M.Background num={type}>
          <M.Block errors={false}>
            <M.ImageWrapper errors={false} num={type}></M.ImageWrapper>
            <M.ButtonLine errors={false}>
              <M.CheckBox onClick={() => setChecked(!checked)}>
                <img src={checked ? greencheck : graycheck} />
                오늘 하루 보지 않기
              </M.CheckBox>
              <M.Close onClick={() => submit(checked)}>닫기</M.Close>
            </M.ButtonLine>
          </M.Block>
        </M.Background>
      </M.Container>
    </>
  );
};

export default AdModal;
