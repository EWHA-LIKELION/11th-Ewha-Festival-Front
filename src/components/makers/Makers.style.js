import styled from 'styled-components';

const COM = {};
COM.Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--beige);
`;
COM.Container = styled.div`
  width: 88%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;
COM.Title = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .text {
    position: absolute;
    font-family: var(--pre-font);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--green1);
    text-align: center;
    word-break: keep-all;
  }
`;
COM.TitleImg = styled.img`
  width: 100%;
`;
COM.SubTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 20px;
    margin-right: 5px;
  }
  .text {
    font-family: var(--pre-font);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--red);
  }
  .border {
    position: absolute;
    border-bottom: 0.5px solid var(--gray2);
    width: 100%;
    margin-top: 35px;
  }
`;

const LL = {};
LL.Title = styled.div`
  width: 110px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 15px 0 7px 0;
  img {
    width: 100%;
  }
  .text {
    position: absolute;
    font-family: var(--pre-font);
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 12px;
    color: var(--white);
  }
`;
LL.MemberWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;
LL.MemberContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
LL.NameText = styled.div`
  font-family: var(--pre-font);
  font-size: 1rem;
  font-weight: 700;
  color: var(--green1);
  margin: 5px 0;
`;
LL.MajorText = styled.div`
  font-family: var(--pre-font);
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--pink);
`;
LL.DesText = styled.div`
  font-family: var(--pre-font);
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--green2);
  text-align: center;
  word-break: keep-all;
  margin: 2px 0;
`;

const TF = {};
TF.SubTitle = styled.div`
  font-family: var(--pre-font);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--red);
  margin: 20px 0 10px 0;
`;
TF.MemberWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
TF.MemberContainer = styled.div`
  width: 50%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export { COM, LL, TF };
