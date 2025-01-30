import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import PasswordRecovery from './pages/Login/PasswordRecovery';
import MyPage from './pages/MyPage/Mypage';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/passwordRecovery' element={<PasswordRecovery />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/mypage' element={<MyPage />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
