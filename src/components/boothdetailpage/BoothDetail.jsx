import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BoothDetailTitle from './BoothDetailTitle';
import BoothDetailNotice from './BoothDetailNotice';
import BoothDetailInfo from './BoothDetailInfo';
import BoothDetailMenu from './BoothDetailMenu';
import BoothDetailComment from './BoothDetailComment';

import { boothdetail } from '../../api/_mock/boothmock';

const BoothDetail = () => {
  const { id } = useParams();
  const [currentBooth, setCurrentBooth] = useState({});
  useEffect(() => {
    //GetBoothDetail(id).then(res => {
    setCurrentBooth(boothdetail.data);
    //}).catch(err => console.log(err));
  }, []);
  return (
    <>
      {currentBooth && (
        <>
          <BoothDetailTitle
            currentBooth={currentBooth}
            setCurrentBooth={setCurrentBooth}
          />
          <BoothDetailNotice {...currentBooth} />
          <BoothDetailInfo {...currentBooth} />
          <BoothDetailMenu {...currentBooth} />
          <BoothDetailComment />
        </>
      )}
    </>
  );
};

export default BoothDetail;
