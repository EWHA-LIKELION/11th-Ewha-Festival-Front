import { useState, useEffect } from 'react';

const useBookmark = (isBookmarked, currentBoothID) => {
  const [state, setState] = useState(isBookmarked);
  const [trigger, setTrigger] = useState(0);
  let id = Number(currentBoothID);
  const toggle = () => {
    // toggle 함수 실행 시 trigger 값이 변경됨
    setTrigger(trigger + 1);
  };
  useEffect(() => {
    if (typeof isBookmarked !== 'boolean') return;
    // 1번째 클릭 undefined로 씹히는 현상 해결해야함
    //console.log(state);
    if (state) {
      // if (login) {
      //   Unlike(id)
      //     .then(res => {
      //       console.log(res);
      //       setState(!state);
      //     })
      //     .catch(err => console.log(err));
      // } else {
      //   alert('로그인 후 북마크 기능을 사용할 수 있습니다.');
      //   nav(to login);
      // }
      setState(!state);
    } else {
      // if (login) {
      //   Like(id)
      //     .then(res => {
      //       console.log(res);
      //       setState(!state);
      //     })
      //     .catch(err => console.log(err));
      // } else {
      //   alert('로그인 후 북마크 기능을 사용할 수 있습니다.');
      //   nav(to login);
      // }
      setState(!state);
    }
  }, [trigger]);
  // deps에 trigger를 추가하여 refetch 될 때마다 내부 코드가 실행되도록 함
  return { state, toggle };
};

export default useBookmark;
