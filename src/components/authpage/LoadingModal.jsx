import styled from 'styled-components';

import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingModal = ({ loading }) => {
  const override = {
    display: 'flex',
    borderColor: '#a1a1a1',
    textAlign: 'center',
    position: 'relative',
    zIndex: '10',
    speedMultiplier: 1,
  };
  return (
    <Wrapper>
      <FadeLoader
        color='#a1a1a1'
        loading={loading}
        cssOverride={override}
        size='20px'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  background: rgba(0, 0, 0, 0.5);
`;

export default LoadingModal;
