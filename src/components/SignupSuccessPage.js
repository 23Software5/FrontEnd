import React from "react";
import { Link } from "react-router-dom";

const SignupSuccessPage = () => {
  return (
    <div>
      <h2>회원가입이 완료되었습니다</h2>
      <p>이제 로그인 페이지에서 로그인할 수 있습니다.</p>
      <Link to="/">로그인 페이지로 이동</Link>
    </div>
  );
};

export default SignupSuccessPage;
