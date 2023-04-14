import React from "react";
import * as S from "./Modal.style";

const Modal = props =>{
    const { title, subTitle, contents, setModal } = props;
    return (
        <>
            <S.Background/>
            <S.Container>
                <S.ModalWrapper>
                    <S.ModalTitle>{title}</S.ModalTitle>
                    <S.ModalContainer>
                      <S.ModalSubtitle> {subTitle}</S.ModalSubtitle>
                        <S.ModalContents>{contents}</S.ModalContents>
                        <S.DeleteBtn onClick={()=>{setModal(false)}}>닫기</S.DeleteBtn>
                    </S.ModalContainer>
                </S.ModalWrapper>
            </S.Container>
        </>
    )
}

export default Modal;