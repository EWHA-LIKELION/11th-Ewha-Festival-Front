import React from 'react';
import TopBar from '../_common/topbar/TopBar';
import Footer from '../_common/footer/Footer';
import LikeLionMember from './LikeLionMember';
import TFMember from './TFMember';

import { makerslist } from './makersdata';
import { COM } from './Makers.style';
import titlebackground from '../../assets/images/makerspage/titlebackground.svg';
import titlestar from '../../assets/images/boothdetailpage/titlestar.svg';

const Makers = () => {
  return (
    <COM.Wrapper>
      <TopBar title='만든이들' />
      <COM.Container>
        <COM.Title>
          <COM.TitleImg src={titlebackground} />
          <div className='text'>
            이화여대 멋쟁이사자처럼 &nbsp;&nbsp; × &nbsp;&nbsp;대동제 TF
          </div>
        </COM.Title>
        <COM.SubTitle>
          <img src={titlestar} />
          <div className='text'>이화여대 멋쟁이사자처럼 11기 운영진</div>
          <div className='border' />
        </COM.SubTitle>
        {makerslist.likelion.map(team => {
          return <LikeLionMember team={team} />;
        })}
        <div style={{ height: '50px' }} />
        <COM.SubTitle>
          <img src={titlestar} />
          <div className='text'>대동제 TF</div>
          <div className='border' />
        </COM.SubTitle>
        {makerslist.tf.map(team => {
          return <TFMember team={team} />;
        })}
      </COM.Container>
      <Footer />
    </COM.Wrapper>
  );
};

export default Makers;
