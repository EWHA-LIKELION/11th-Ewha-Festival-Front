import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BoothDetailTitle from './BoothDetailTitle';
import BoothDetailNotice from './BoothDetailNotice';
import BoothDetailInfo from './BoothDetailInfo';
import BoothDetailMenu from './BoothDetailMenu';
import BoothDetailComment from './BoothDetailComment';

import { boothdetail } from '../../api/_mock/boothmock';
import { GetBooth } from '../../api/booth';

const BoothDetail = () => {
  const { id } = useParams();
  const [currentBooth, setCurrentBooth] = useState({});
  useEffect(() => {
    GetBooth(id)
      .then(res => {
        console.log(res);
        //setCurrentBooth(res.data.data);
      })
      .catch(err => console.log(err));
    setCurrentBooth(boothdetail.data);
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
