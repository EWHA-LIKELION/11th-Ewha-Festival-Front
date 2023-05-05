import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--pre-font);
`;
export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

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
`;
export const ModalWrapper = styled.div`
  width: 80%;
  @media (min-width: 576px) {
    width: 312px;
  }
  z-index: 200;
  height: 213px;

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
  border-radius: 8px;
  background-color: #ffffff;
  svg {
    width: 62px;
    height: 42px;
    color: var(--red);
  }
`;
export const ModalContainer = styled.div`
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalTitle = styled.div`
  height: 49px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #029c54;
  border-radius: 8px 8px 0 0;

  color: #ffffff;
  font-weight: 700;
`;
export const ModalSubtitle = styled.div`
  margin: 21px 0 16px 0;
  font-size: 12px;
  color: #f55b1d;
`;
export const ModalContents = styled.div`
  width: 80%;
  margin-bottom: 28px;

  text-align: center;
  font-size: 14px;
  color: #004628;
  white-space: pre-line;
`;
export const AlertWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AlertText = styled.div`
  margin-top: 9px;
  color: var(--green1);
  font-weight: 400;
  font-size: 11.5px;
  line-height: 18px;
`;
export const AlertMessage = styled.div`
  margin: 9px 0 17px 0;
  color: var(--red);
  font-weight: 500;
  font-size: 13px;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 96px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  }
`;
export const WhiteBtn = styled.button`
  background-color: var(--white);
  margin-right: 10px;
  color: var(--green2);
  border: 0.4px solid var(--green2);
`;
export const GreenBtn = styled.button`
  background-color: var(--green2);
  color: var(--white);
  border: none;
`;
