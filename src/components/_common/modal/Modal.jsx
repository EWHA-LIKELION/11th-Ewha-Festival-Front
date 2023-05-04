import React, { useEffect } from 'react';
import * as S from './Modal.style';
// icons
import { IoIosWarning } from 'react-icons/io';

const Modal = props => {
  const { secret, title, subTitle, contents, open, close, onClick } = props;
  const path = window.location.pathname;

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
          secret || path.includes('notice') || path.includes('detail') ? (
            <S.ModalWrapper>
              <S.ModalTitle>{title}</S.ModalTitle>
              <S.ModalContainer>
                <S.ModalSubtitle> {subTitle}</S.ModalSubtitle>
                <S.ModalContents>{contents}</S.ModalContents>
                <S.ButtonWrapper>
                  {path.includes('register') ? (
                    <S.GreenBtn onClick={close}>닫기</S.GreenBtn>
                  ) : (
                    <>
                      <S.WhiteBtn onClick={close}>아니오</S.WhiteBtn>
                      <S.GreenBtn onClick={onClick}>예</S.GreenBtn>
                    </>
                  )}
                </S.ButtonWrapper>
              </S.ModalContainer>
            </S.ModalWrapper>
          ) : (
            <S.ModalWrapper>
              <S.AlertWrapper>
                <IoIosWarning />
                <S.AlertText>
                  잃어버린 계정 정보는 다시 찾을 수 있는 방법이 없으니
                  <br />
                  회원가입 시 아이디와 비밀번호를 잘 기억해두세요!
                </S.AlertText>
                <S.AlertMessage>회원가입을 완료 하시겠습니까?</S.AlertMessage>
              </S.AlertWrapper>
              <S.ButtonWrapper>
                <>
                  <S.WhiteBtn onClick={close}>아니오</S.WhiteBtn>
                  <S.GreenBtn onClick={onClick}>예</S.GreenBtn>
                </>
              </S.ButtonWrapper>
            </S.ModalWrapper>
          )
        ) : null}
      </S.Container>
    </>
  );
};

export default Modal;
