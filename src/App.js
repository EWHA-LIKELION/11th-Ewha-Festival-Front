import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import './css/common.css';

import LoginPage from './pages/authpage/LoginPage';
import RegisterPage from './pages/authpage/RegisterPage';
import BoothDetailPage from './pages/boothpage/BoothDetailPage';
import BoothPage from './pages/boothpage/BoothPage';
import MainPage from './pages/MainPage';
import MakersPage from './pages/MakersPage';
import EditBoothPage from './pages/mypage/EditBoothPage';
import EditMenuPage from './pages/mypage/EditMenuPage';
import EditMenuDetailPage from './pages/mypage/EditMenuDetailPage';
import MyPage from './pages/mypage/MyPage';
import NoticeListPage from './pages/noticepage/NoticeListPage';
import NoticeDetailPage from './pages/noticepage/NoticeDetailPage';
import NoticeWritePage from './pages/noticepage/NoticeWritePage';
import SearchPage from './pages/SearchPage';
import TrashBinPage from './pages/TrashBinPage';

function App() {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route exact path='/' element={<MainPage />} />
      {/* 검색 */}
      <Route exact path='/search' element={<SearchPage />} />
      {/* 로그인 및 회원가입 */}
      <Route exact path='/auth/login' element={<LoginPage />} />
      <Route exact path='/auth/register' element={<RegisterPage />} />
      {/* 마이페이지 및 수정 */}
      <Route
        exact
        path='/mypage'
        element={<AuthRoute component={<MyPage />} />}
      />
      <Route
        exact
        path='/mypage/editbooth'
        element={<AuthRoute component={<EditBoothPage />} />}
      />
      <Route
        exact
        path='/mypage/editmenu'
        element={<AuthRoute component={<EditMenuPage />} />}
      />
      <Route
        exact
        path='/mypage/editmenu/:menuIndex'
        element={<AuthRoute component={<EditMenuDetailPage />} />}
      />
      {/* 부스 및 상세 페이지 */}
      <Route exact path='/booth' element={<BoothPage />} />
      <Route exact path='/booth/detail/:id' element={<BoothDetailPage />} />
      {/* 공지 게시판 */}
      <Route exact path='/notice' element={<NoticeListPage />} />
      <Route exact path='/notice/:id' element={<NoticeDetailPage />} />
      <Route exact path='/notice/write' element={<NoticeWritePage />} />
      {/* 만든이들 페이지 */}
      <Route exact path='/makers' element={<MakersPage />} />
      {/* 쓰레기통 페이지 */}
      <Route exact path='/trashbin' element={<TrashBinPage />} />
    </Routes>
  );
}

export default App;
