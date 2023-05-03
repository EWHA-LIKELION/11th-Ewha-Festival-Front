import styled from 'styled-components';
import searchicon from '../../assets/images/searchpage/searchicon.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-color: var(--beige);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-top: 10px;
  width: 85%;
  height: 45px;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 0px 2px 6px 0px rgba(165, 165, 165, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    padding-right: 12px;
  }
`;

export const Input = styled.input`
  width: 75%;
  height: 40px;
  border: none;
  outline: none;
  padding: 0 12px 0 12px;
  background-color: transparent;
  font-size: 13px;

  ::placeholder {
    color: var(--green2);
    opacity: 1;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 84%;
  color: var(--gray2);
  font-weight: 500;
  font-size: 12.48px;
  line-height: 15px;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ComponentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding-bottom: 30px;
`;
