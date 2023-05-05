import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LikeBooth, UnLikeBooth } from '../../api/booth';

const useBookmark = (isBookmarked, currentBoothID) => {
  const nav = useNavigate();
  const [state, setState] = useState(isBookmarked);
  const [trigger, setTrigger] = useState(Date.now());
  const [id, setId] = useState(0);
  useEffect(() => {
    setState(isBookmarked);
    setId(Number(currentBoothID));
  }, [isBookmarked]);
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token === null) {
      setIsLogin(false);
    }
    if (token !== null) {
      setIsLogin(true);
    }
  }, []);
  useEffect(() => {
    if (typeof isBookmarked !== 'boolean') return;
    if (state) {
      UnLikeBooth(id)
        .then(res => {
          console.log(res.data);
          setState(!state);
        })
        .catch(err => {
          console.log(err);
          if (err.response.status === 401) {
            alert('로그인 후 북마크 기능을 사용하실 수 있습니다.');
            nav('/auth/login');
          }
        });
    } else {
      LikeBooth(id)
        .then(res => {
          console.log(res.data);
          setState(!state);
        })
        .catch(err => {
          console.log(err);
          if (err.response.status === 401) {
            if (window.confirm('로그인 후 북마크 기능을 사용하실 수 있습니다.'))
              nav('/auth/login');
            else return;
          }
        });
    }
  }, [trigger]);
  const toggle = () => setTrigger(trigger + 1);
  return { state, toggle };
};

export default useBookmark;
