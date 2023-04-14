import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
    animation: modal-bg-show 0.3s;
    @keyframes modal-bg-show {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }
`
export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
`
export const ModalWrapper = styled.div`
    width: 80%;
    height: 213px;
    position: absolute;
    top: 30%;
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
        opacity: 0;
        margin-top: -20px;
        }
        to {
        opacity: 1;
        margin-top: 0;
        }
    }
`
export const ModalTitle = styled.div`
    height: 49px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #029C54;
    border-radius: 8px 8px 0 0;

    color: #ffffff;
    font-weight: 700;
`
export const ModalContainer = styled.div`
    height: 164px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ffffff;
    border-radius: 0 0 8px 8px;
`
export const ModalSubtitle = styled.div`
    margin: 21px 0 16px 0;
    font-size: 12px;
    color: #F55B1D;
`
export const ModalContents = styled.div`    
    width: 80%;
    margin-bottom: 28px;

    text-align: center;
    font-size: 14px;
    word-break: keep-all;
    color: #004628;
`
export const DeleteBtn = styled.button`
    width: 96px;
    height: 30px;

    background-color: #029C54;
    color: #ffffff;
    border-radius: 8px;
    border: none;
`