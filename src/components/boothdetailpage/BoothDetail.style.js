import styled from 'styled-components';

const T = {};
T.Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
T.ImgDiv = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  background-color: gray;
`;
T.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;

const N = {};

const I = {};

const M = {};

const C = {};

export { T, N, I, M, C };
