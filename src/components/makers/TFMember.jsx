import React from 'react';
import { LL, TF } from './Makers.style';
import pinkback from '../../assets/images/makerspage/pinkback.svg';

const TFMember = ({ team }) => {
  return (
    <>
      <LL.Title>
        <img src={pinkback} />
        <div className='text'>{team.team}</div>
      </LL.Title>
      <LL.DesText>{team.description}</LL.DesText>
      <TF.SubTitle>{`${team.team}장`}</TF.SubTitle>
      <TF.MemberContainer>
        <LL.MajorText>{team.lead.major}</LL.MajorText>
        <LL.NameText>{team.lead.name}</LL.NameText>
      </TF.MemberContainer>
      {team.member.length !== 0 ? (
        <>
          <TF.SubTitle>{`${team.team}원`}</TF.SubTitle>
          <TF.MemberWrapper>
            {team.member.map(item => {
              return (
                <TF.MemberContainer key={item.name}>
                  <LL.MajorText>{item.major}</LL.MajorText>
                  <LL.NameText>{item.name}</LL.NameText>
                </TF.MemberContainer>
              );
            })}
          </TF.MemberWrapper>
        </>
      ) : null}
    </>
  );
};

export default TFMember;
