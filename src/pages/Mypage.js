import React from 'react';
import "../styles/Mypage.css";
import { Link } from 'react-router-dom';

const Mypage = () => {
  const res = {
    name: '사용자 이름',
    email: 'user@example.com',
    phone: '010-1234-5678',
    nickname: '닉네임',
  };

  return (
    <div>
      
      <div className='my-page-top'>마이페이지</div>
      <div className='my-management'>회원정보관리</div>

      <div className='my_container'>
        <div className='my_table'>
          <table>
            <tbody>
              <tr>
                <th>이름</th>
                <td>{res.name}</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{res.email}</td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>{res.phone}</td>
              </tr>
              <tr>
                <th>닉네임</th>
                <td>{res.nickname}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br/>

        <div>
          <button className='my-update-btn'>
            <div className="my-update-btn-name">정보수정</div>
          </button>

          <button className='my-withdraw-btn'>
            <div className="my-withdraw-btn-name">탈퇴하기</div>
          </button>
        </div><br/><br/><br/><br/>

        <div>
          <Link to="/myreview">
            <button className='my-review-btn'>
              <div className='my-review-image'>
                <img src="https://cdn.pixabay.com/photo/2016/11/23/18/14/fountain-pen-1854169_1280.jpg" alt="내가 쓴 글 이미지" />
              </div>
              <div className="my-review-btn-name">내가 쓴 글</div>
            </button>
          </Link>

          <Link to="/mysearch">
            <button className='my-search-btn'>
              <div className='my-search-image'>
                <img src="https://cdn.pixabay.com/photo/2014/12/27/15/34/notebook-581128_1280.jpg" alt="내 견적확인 이미지" />
              </div>
              <div className="my-search-btn-name">내 견적확인</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mypage;