import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBookmark = (isBookmarked, currentBoothID) => {
  const nav = useNavigate();
  const [state, setState] = useState(isBookmarked);
  const [trigger, setTrigger] = useState(Date.now());
  const [id, setId] = useState(0);
  useEffect(() => {
    setState(isBookmarked);
    setId(Number(currentBoothID));
  }, [isBookmarked]);
  const [isLogin, setIsLogin] = useState(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token === null) {
      //setIsLogin(false);
    }
    if (token !== null) {
      //setIsLogin(true);
    }
  }, []);
  useEffect(() => {
    if (typeof isBookmarked !== 'boolean') return;
    if (isLogin) {
      if (state) {
        // Unlike(id)
        //   .then(res => {
        //     console.log(res);
        //     setState(!state);
        //     alert('북마크 해제 완료되었습니다.');
        //   })
        //   .catch(err => console.log(err));
      } else {
        // Like(id)
        // .then(res => {
        //   console.log(res);
        //   setState(!state);
        //   alert('북마크 설정 완료되었습니다.');
        // })
        // .catch(err => console.log(err));
      }
      setState(!state);
    } else {
      alert('로그인 후 북마크 기능을 사용할 수 있습니다.');
      nav('/auth/login');
    }
  }, [trigger]);
  const toggle = () => setTrigger(trigger + 1);
  return { state, toggle };
};

export default useBookmark;
