import React,{ useState } from "react";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { email, password });
  };
  const handleSignup = () => {
    console.log("회원가입 시도");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">로그인</h2>
        <form className="mt-4">
          <div>
            <label className="block text-sm font-medium">이메일</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onSubmit={handleSubmit}
            type="submit"
            className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            로그인
          </button>
          <button
            onSubmit={handleSignup}
            className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
            회원가입
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;