import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = () => {
    console.log("hi");
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSumbit}>
        <label>
          이메일
          <input type="email" placeholder="이메일을 입력해주세요" value={email} onChange={({ target: { value } }) => setEmail(value)} />
        </label>
        <label>
          비밀번호
          <input type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} />
        </label>
        <button disabled={!email || !password}>로그인</button>
      </form>
    </>
  );
};

export default Login;
