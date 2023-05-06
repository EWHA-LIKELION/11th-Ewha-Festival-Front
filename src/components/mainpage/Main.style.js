import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--beige);
  justify-content: center;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px 30px 30px;

  img {
    width: 28px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 300px;
  margin-bottom: 20px;

  .title {
    position: absolute;
    z-index: 1;
  }

  .v1 {
    position: absolute;
    left: 10%;
    bottom: 20%;
  }

  .v2 {
    position: absolute;
    top: 0;
    right: 3%;
  }

  .v3 {
    position: absolute;
    top: 25%;
    left: 10%;
  }
`;

export const Cloud = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  color: var(--white);
  position: relative;
  height: 100px;
  margin: 20px 0 30px 0;

  img {
    position: absolute;
    z-index: 0;
  }

  .title {
    position: absolute;
    z-index: 1;
  }
`;

export const Event = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 400px;

  img {
    position: absolute;
    z-index: 0;
  }

  .date {
    top: 15%;
    left: 25%;
  }

  .box {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
  }

  .content {
    margin: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-weight: 700;
    font-size: 18px;
  }

  .time {
    font-weight: 500;
    font-size: 12px;
  }
`;

export const ScheduleButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  background-color: var(--white);
  color: var(--green2);
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--black);
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  margin: 20px 0 20px 0;
`;

export const P = styled.div`
  font-size: 11px;
  line-height: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 20px 0 20px 0;

  .green {
    color: var(--green1);
  }

  .set {
    display: flex;
  }
`;

export const TFButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  background-color: var(--green2);
  color: var(--white);
  margin-bottom: 30px;
  border: none;
`;

export const LionButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  background-color: var(--green2);
  color: var(--white);
`;
