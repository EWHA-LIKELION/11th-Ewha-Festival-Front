import React from 'react';
import { LL } from './Makers.style';
import redback from '../../assets/images/makerspage/redback.svg';

const LikeLionMember = ({ team }) => {
  return (
    <>
      <LL.Title>
        <img src={redback} />
        <div className='text'>{team.team}</div>
      </LL.Title>
      <LL.MemberWrapper>
        {team.member.map(item => {
          return (
            <LL.MemberContainer>
              <LL.MajorText>{item.major}</LL.MajorText>
              <LL.NameText>{item.name}</LL.NameText>
              {item.task.map(t => {
                return <LL.DesText>{t}</LL.DesText>;
              })}
            </LL.MemberContainer>
          );
        })}
      </LL.MemberWrapper>
    </>
  );
};

export default LikeLionMember;
