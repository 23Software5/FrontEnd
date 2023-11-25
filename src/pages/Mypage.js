import React from 'react';
import "../styles/Mypage.css";
import { Link } from 'react-router-dom';

const Mypage = () => {
  return (
    <div>
      <div className='my-page-top'>마이페이지</div>
      <div className='my-management'>회원정보관리</div>

      <div className='container'>
        
        <br/>

        <div>
          <Link to="/myreview">
            <button>내가 쓴 글</button>
          </Link>
          <Link to="/mysearch">
            <button>내 견적 확인</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Mypage;
