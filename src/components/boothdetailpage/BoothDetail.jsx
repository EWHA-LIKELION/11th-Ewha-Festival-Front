import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BoothDetailTitle from './BoothDetailTitle';
import BoothDetailNotice from './BoothDetailNotice';
import BoothDetailInfo from './BoothDetailInfo';
import BoothDetailMenu from './BoothDetailMenu';
import BoothDetailComment from './BoothDetailComment';

import { response } from './_mock';

const BoothDetail = () => {
  let { id } = useParams();
  const [currentBooth, setCurrentBooth] = useState({});
  useEffect(() => {
    //GetBoothDetail(id).then(res => {
    setCurrentBooth(response.data);
    console.log(currentBooth);
    //}).catch(err => console.log(err));
  }, []);
  return (
    <>
      <BoothDetailTitle
        currentBooth={currentBooth}
        setCurrentBooth={setCurrentBooth}
      />
      <BoothDetailNotice {...currentBooth} />
      <BoothDetailInfo {...currentBooth} />
      <BoothDetailMenu {...currentBooth} />
      <BoothDetailComment
        currentBooth={currentBooth}
        setCurrentBooth={setCurrentBooth}
      />
    </>
  );
};

export default BoothDetail;
