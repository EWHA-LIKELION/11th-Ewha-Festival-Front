import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 130px;
  border-top: 1px solid var(--gray2);
  background-color: var(--gray3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
`;
export const MainText = styled.div`
  font-family: var(--pre-font);
  color: var(--gray2);
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 5px;
  a {
    color: var(--gray2);
  }
`;
export const IconContainer = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  a {
    text-decoration: none;
  }
`;
export const Logo = styled.div`
  width: 20px;
`;
export const BottomText = styled.div`
  font-family: var(--pre-font);
  color: var(--gray2);
  font-size: 0.7rem;
  font-weight: 300;
`;
