import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { id, password });
    navigate('/Main')
  };
  
    
  // const handleSignup = () => { 
  //   console.log("회원가입 시도");
  // }
  // const handlePasswordReset = () => {
  //   console.log("비밀번호 찾기 시도");
  // };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">로그인</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">아이디</label>
            <input
              type="id"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mt-3">
            <label className="block text-sm font-medium">비밀번호</label>
            <input
              type="password"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            로그인
          </button>
          <div>
            <div>
              <Link to= "/SignUp">회원가입</Link>
            </div>
            <div>
              <Link to="/PasswordRecovery">비밀번호 찾기</Link>
            </div>
          </div>
        </form>
        {/* <button
          onClick={handleSignup}
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          회원가입
        </button>
        <button
          onClick={handlePasswordReset}
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          비밀번호 찾기
        </button> */}
      </div>
    </div>
  );
};

export default Login;