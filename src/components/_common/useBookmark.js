import { useState, useEffect } from 'react';

const useBookmark = (isBookmarked, currentBoothID) => {
  const [state, setState] = useState(isBookmarked);
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (typeof isBookmarked !== 'boolean') return;
    if (state) {
      // if (login) {
      //   Unlike(currentBoothID)
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
      //   Like(currentBoothID)
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
  return { state, refetch };
};

export default useBookmark;
