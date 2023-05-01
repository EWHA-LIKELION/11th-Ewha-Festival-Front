import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GetBooth } from '../../api/booth';

import BoothDetailTitle from './BoothDetailTitle';
import BoothDetailNotice from './BoothDetailNotice';
import BoothDetailInfo from './BoothDetailInfo';
import BoothDetailMenu from './BoothDetailMenu';
import BoothDetailComment from './BoothDetailComment';

const BoothDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [currentBooth, setCurrentBooth] = useState({});
  const [isNone, setIsNone] = useState(false);
  useEffect(() => {
    GetBooth(id)
      .then(res => {
        setCurrentBooth(res.data.data);
      })
      .catch(err => {
        if (err.response.data.detail === '찾을 수 없습니다.') setIsNone(true);
      });
  }, []);
  return (
    <>
      {isNone ? (
        <None>
          부스 정보를 찾을 수 없습니다.
          <div className='back' onClick={() => nav('/booth')}>
            부스 목록으로 돌아가기
          </div>
        </None>
      ) : (
        currentBooth && (
          <>
            <BoothDetailTitle
              currentBooth={currentBooth}
              setCurrentBooth={setCurrentBooth}
            />
            <BoothDetailNotice />
            <BoothDetailInfo {...currentBooth} />
            <BoothDetailMenu {...currentBooth} />
            <BoothDetailComment />
          </>
        )
      )}
    </>
  );
};

export default BoothDetail;

const None = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--beige);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  .back {
    font-weight: 400;
    text-decoration: underline;
    font-size: 1rem;
    margin-top: 5px;
  }
`;
