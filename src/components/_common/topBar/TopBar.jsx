import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// style.js
import * as S from './TopBar.style';
// icons
import { HiMenu, HiOutlineSearch } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';
import SideBar from '../sidebar/SideBar';

const TopBar = props => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  // sidebar 관리
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      {sideBar ? <SideBar setSideBar={setSideBar} /> : null}
      {path === '/' ? (
        <S.Wrapper2>
          <HiMenu
            onClick={() => {
              setSideBar(true);
            }}
          />
          <S.Title style={{ visibility: 'hidden' }}>{props.title}</S.Title>
          <BsFillPersonFill
            onClick={() => {
              navigate('/mypage');
            }}
          />
        </S.Wrapper2>
      ) : (
        <S.Wrapper>
          <HiMenu
            onClick={() => {
              setSideBar(true);
            }}
          />
          <S.Title>{props.title}</S.Title>
          {path.includes('booth') ? (
            <HiOutlineSearch
              onClick={() => {
                navigate('/search');
              }}
            />
          ) : (
            <HiOutlineSearch style={{ visibility: 'hidden' }} />
          )}
        </S.Wrapper>
      )}
    </>
  );
};

export default TopBar;

// import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // style.js
// import * as S from './TopBar.style';
// // icons
// import { HiMenu, HiOutlineSearch } from 'react-icons/hi';
// import { BsFillPersonFill } from 'react-icons/bs';
// import SideBar from '../sidebar/SideBar';

// const TopBar = props => {
//   const navigate = useNavigate();
//   const path = window.location.pathname;
//   // sidebar 관리
//   const [sideBar, setSideBar] = useState(false);
//   return (
//     <>
//       {sideBar ? <SideBar setSideBar={setSideBar} /> : null}
//       <S.Wrapper>
//         <HiMenu
//           onClick={() => {
//             setSideBar(true);
//           }}
//         />
//         {path === '/' ? (
//           <S.Title style={{ visibility: 'hidden' }}>{props.title}</S.Title>
//         ) : (
//           <S.Title>{props.title}</S.Title>
//         )}
//         {path === '/' ? (
//           <BsFillPersonFill
//             onClick={() => {
//               navigate('/mypage');
//             }}
//           />
//         ) : path.includes('booth') ? (
//           <HiOutlineSearch
//             onClick={() => {
//               navigate('/search');
//             }}
//           />
//         ) : (
//           <HiOutlineSearch style={{ visibility: 'hidden' }} />
//         )}
//       </S.Wrapper>
//     </>
//   );
// };

// export default TopBar;
