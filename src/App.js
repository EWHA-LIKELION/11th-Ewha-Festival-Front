import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/authpage/LoginPage';
import RegisterPage from './pages/authpage/RegisterPage';
import BoothDetailPage from './pages/boothpage/BoothDetailPage';
import BoothPage from './pages/boothpage/BoothPage';
import MainPage from './pages/MainPage';
import MakersPage from './pages/MakersPage';
import EditBoothPage from './pages/mypage/EditBoothPage';
import EditMenuPage from './pages/mypage/EditMenuPage';
import MyPage from './pages/mypage/MyPage';
import AddNoticePage from './pages/noticepage/AddNoticePage';
import NoticeDetailPage from './pages/noticepage/NoticeDetailPage';
import NoticePage from './pages/noticepage/NoticePage';
import UpdateNoticePage from './pages/noticepage/UpdateNoticePage';
import SearchPage from './pages/SearchPage';

import './css/common.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route exact path="/" element={<MainPage />} />
        {/* 검색 */}
        <Route exact path="/search" element={<SearchPage />} />
        {/* 로그인 및 회원가입 */}
        <Route exact path="/auth/login" element={<LoginPage />} />
        <Route exact path="/auth/register" element={<RegisterPage />} />
        {/* 마이페이지 및 수정 */}
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/mypage/editbooth" element={<EditBoothPage />} />
        <Route exact path="/mypage/editmenu" element={<EditMenuPage />} />
        {/* 부스 및 상세 페이지 */}
        <Route exact path="/booth" element={<BoothPage />} />
        <Route exact path="/booth/detail/:id" element={<BoothDetailPage />} />
        {/* 공지 게시판 */}
        <Route exact path="/notice" element={<NoticePage />} />
        <Route exact path="/notice/:id" element={<NoticeDetailPage />} />
        <Route exact path="/notice/add" element={<AddNoticePage />} />
        <Route exact path="/notice/update" element={<UpdateNoticePage />} />
        {/* 만든이들 페이지 */}
        <Route exact path="/makers" element={<MakersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
