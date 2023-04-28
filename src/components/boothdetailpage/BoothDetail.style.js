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

const T = {};
T.CircleRect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .circle {
    width: 45px;
    filter: drop-shadow(0px 1px 4px rgb(150 150 150 / 0.2));
  }
  svg {
    position: absolute;
    z-index: 101;
  }
`;
T.ImgDiv = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  background-color: gray;
`;
T.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;
T.Container = styled.div`
  width: 88%;
`;
T.TitleContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 10px 0;
`;
T.Title = styled.div`
  width: calc(100% - 40px);
  p {
    word-break: break-all;
    font-family: var(--pre-font);
    font-weight: 700;
    font-size: 1.6rem;
  }
`;
T.HeartDiv = styled.div`
  width: 30px;
  height: 35px;
  overflow: hidden;
  position: relative;
`;
T.HeartImg = styled.img`
  width: 100%;
`;
T.Click = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
T.Category = styled.span`
  font-size: 1.1rem;
  color: var(--red);
  font-family: var(--pre-font);
  font-weight: 600;
`;
T.Hashtag = styled.span`
  font-size: 1.1rem;
  color: var(--green2);
  font-family: var(--pre-font);
  font-weight: 400;
  margin-left: 8px;
`;

const N = {};
N.Container = styled.div`
  width: 88%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
N.Box = styled.div`
  width: calc(100% - 4px);
  background-color: var(--white);
  border: 1px solid var(--green1);
  border-radius: 0.4rem;
  display: flex;
  svg {
    margin: 10px;
  }
`;
N.TextContainer = styled.div`
  margin: 13px 0;
  width: calc(100% - 58px);
`;
N.Title = styled.div`
  font-size: 1rem;
  font-family: var(--pre-font);
  font-weight: 600;
  color: var(--green1);
`;
N.Text = styled.div`
  font-size: 1rem;
  font-family: var(--pre-font);
  font-weight: 300;
  color: var(--black);
  margin-top: 5px;
  word-break: keep-all;
`;
N.Time = styled.div`
  font-size: 0.9rem;
  font-family: var(--pre-font);
  font-weight: 300;
  color: var(--green2);
  margin-top: 7px;
`;

const I = {};
I.Container = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  position: relative;
`;
I.StarImg = styled.img`
  width: 20px;
  padding: 5px;
`;
I.Title = styled.div`
  font-size: 1.1rem;
  font-family: var(--pre-font);
  font-weight: 700;
  color: var(--red);
`;
I.Indent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .inner {
    margin: 0 30px;
    width: 100%;
  }
`;
I.Text = styled.div`
  font-size: 1rem;
  line-height: 150%;
  font-family: var(--pre-font);
  font-weight: 400;
  color: var(--green1);
`;
I.MapButton = styled.div`
  position: absolute;
  width: 146px;
  height: 22px;
  top: 88px;
  right: 0px;
  background-color: var(--white);
  border: 1px solid var(--red);
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 0.9rem;
    font-family: var(--pre-font);
    font-weight: 700;
    color: var(--red);
    margin: 1px 0 0 5px;
  }
`;
I.Map = styled.img`
  width: 99%;
  height: 250px;
  border: 1px solid #000;
  margin-bottom: 15px;
`;
I.DesContainer = styled.div`
  width: 100%;
  min-height: 44px;
  word-break: keep-all;
  overflow-x: hidden;
`;
I.ShortDes = styled.div`
  font-family: var(--pre-font);
  font-size: 1rem;
  font-weight: 400;
  color: var(--black);
  line-height: 130%;
  height: 44px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
I.LongDes = styled.div`
  font-family: var(--pre-font);
  font-size: 1rem;
  font-weight: 400;
  color: var(--black);
  line-height: 130%;
`;

const M = {};
M.Container = styled.div`
  width: 88%;
  margin-top: 10px;
`;
M.ImageContainer = styled.div`
  width: 100%;
  height: 140px;
  margin-top: 10px;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
M.ImgRect = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-right: 15px;
  overflow: hidden;
  flex-shrink: 0;
`;
M.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
`;
M.MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 20px);
  margin: 0 auto;
`;
M.MenuTextWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
M.MenuText = styled.p`
  font-family: var(--pre-font);
  font-size: 1rem;
  word-break: break-all;
`;

const C = {};
C.Container = styled.div`
  width: 88%;
  margin-top: 10px;
  padding-bottom: 40px;
`;
C.CommentContainer = styled.div`
  width: 100%;
  min-height: 60px;
  margin-top: 10px;
  background-color: var(--white);
  border-radius: 5px;
  .inner {
    padding: 10px 15px;
  }
`;
C.CommentTop = styled.div`
  display: flex;
  min-height: 1.3rem;
  position: relative;
  margin-bottom: 5px;
`;
C.CommentText = styled.div`
  font-family: var(--pre-font);
  font-size: 1rem;
  color: var(--black);
`;
C.CommentTimeText = styled.div`
  font-family: var(--pre-font);
  font-size: 0.8rem;
  color: var(--gray2);
  margin: 2px 0 0 5px;
`;
C.Delete = styled.div`
  position: absolute;
  right: 0px;
`;
C.Bottom = styled.div`
  width: 100%;
  height: 70px;
`;
C.CommentInputWrapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--beige);
  border-top: 1px solid var(--gray3);
  z-index: 90;
`;
C.CommentInputContainer = styled.div`
  width: 90%;
  height: 40px;
  margin: 10px 0 20px 0;
  background-color: var(--white);
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.5);
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
`;
C.CommentInput = styled.textarea`
  border: 0;
  padding: 3px;
  padding-top: 6px;
  margin-left: 10px;
  width: calc(100% - 60px);
  height: 24px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  resize: none;
  font-family: var(--pre-font);
  font-weight: 300;
  font-size: 1rem;
`;
C.WriteRect = styled.div`
  position: absolute;
  right: 15px;
  margin-top: 5px;
`;

export { COM, T, N, I, M, C };
