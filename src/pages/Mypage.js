import React from 'react';
import { Link } from 'react-router-dom';

const Mypage = () => {
  return (
    <div>
      <h1>Mypage</h1>
      <Link to="/myreview">
        <button>내가 쓴 글</button>
      </Link>
      <Link to="/mysearch">
        <button>내 견적 확인</button>
      </Link>
    </div>
  );
}

export default Mypage;
