import { useState, useEffect } from 'react';

const useBookmark = (isBookmarked, currentBoothID) => {
  console.log(isBookmarked);
  const [state, setState] = useState(isBookmarked);
  const [trigger, setTrigger] = useState(0);
  let id = Number(currentBoothID);
  const toggle = () => {
    // toggle 함수 실행 시 trigger 값이 변경됨
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (typeof isBookmarked !== 'boolean') return;
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
      // }
      setState(!state);
    }
  }, [trigger]);
  // deps에 trigger를 추가하여 refetch 될 때마다 내부 코드가 실행되도록 함
  console.log(state);
  return { state, toggle };
};

export default useBookmark;
