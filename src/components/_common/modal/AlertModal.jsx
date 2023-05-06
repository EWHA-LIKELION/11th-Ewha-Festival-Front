import React, { useEffect } from 'react';
import * as S from './Modal.style';
// icons
import { IoIosWarning } from 'react-icons/io';

const AlertModal = props => {
  const { open, close, checkID, checkPW, checkSecretWord, checkName } = props;

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
      <S.Container>
        <S.Background className='modal-back' />
        {open ? (
          <S.ModalWrapper>
            <S.AlertWrapper>
              <IoIosWarning />
              <S.AlertTitle>입력을 확인해주세요</S.AlertTitle>
              <S.AlertTextWrapper>
                {checkID && checkPW ? null : (
                  <div>
                    {!checkID && !checkPW
                      ? '아이디와 비밀번호를 '
                      : !checkID && checkPW
                      ? '아이디를 '
                      : checkID && !checkPW
                      ? '비밀번호를 '
                      : ''}
                    확인해주세요
                  </div>
                )}
                {checkName !== true ? <div>{checkName}</div> : null}
                {checkSecretWord ? null : (
                  <div>비밀단어가 일치하지 않습니다</div>
                )}
              </S.AlertTextWrapper>
            </S.AlertWrapper>
            <S.ButtonWrapper>
              <S.GreenBtn onClick={close}>닫기</S.GreenBtn>
            </S.ButtonWrapper>
          </S.ModalWrapper>
        ) : null}
      </S.Container>
    </>
  );
};

export default AlertModal;
