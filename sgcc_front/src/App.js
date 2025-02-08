import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import PasswordRecovery from './pages/Login/PasswordRecovery';
import NewPassword from './pages/Login/NewPassword';
import MyPage from './pages/MyPage/MyPage';
import Write from './pages/Board/Write';
import BoardList from './pages/Board/BoardList';
import BoardDetail from './pages/Board/BoardDetail';
import Study from './pages/Study/Study';
import StudyList from './pages/Study/StudyList';
import StudyDetail from './pages/Study/StudyDetail';
import LibraryBorrow from './pages/Library/LibraryBorrow';
import LibraryDetail from './pages/Library/LibraryDetail';
import LibraryRegister from './pages/Library/LibraryRegister';

import Header from './components/Header';
import Footer from './components/Footer';

import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/passwordRecovery" element={<PasswordRecovery />} />
              <Route path="/NewPassword" element={<NewPassword />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/write" element={<Write />} />
              <Route path="/boardlist" element={<BoardList />} />
              <Route path="/boarddetail" element={<BoardDetail />} />
              <Route path="/study" element={<Study />} />
              <Route path="/studylist" element={<StudyList />} />
              <Route path="/studydetail" element={<StudyDetail />} />
              <Route path="/libraryborrow" element={<LibraryBorrow />} />
              <Route path="/librarydetail" element={<LibraryDetail />} />
              <Route path="/libraryregister" element={<LibraryRegister />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
