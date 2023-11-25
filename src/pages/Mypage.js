import React from "react";
import "../styles/Mypage.css";
import { Link } from "react-router-dom";
import * as api from "../Api"; // 추가: api.js 파일 불러오기

const Mypage = () => {
  const res = {
    name: "사용자 이름",
    email: "user@example.com",
    phone: "010-1234-5678",
    nickname: "닉네임",
  };

  // useEffect를 사용하여 페이지가 로드될 때 사용자 정보를 가져오도록 설정
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // 여기에서 getUserProfile 함수를 호출
        const userProfile = await api.getUserProfile(userData.userId); // userId는 사용자의 아이디로 대체해야 합니다.
        setUserData(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // 추가: 에러 처리 로직을 추가
        // 예: 에러 메시지를 표시하는 등
      }
    };

    // 페이지 로드 시 사용자 정보 가져오기
    fetchUserProfile();
  }, [userData.userId]); // userId가 변경될 때마다 useEffect가 실행되도록 설정

  // 추가: 계정 탈퇴 함수
  const handleWithdraw = async () => {
    try {
      // 여기에서 deleteUserAccount 함수를 호출
      await api.deleteUserAccount(userId); // userId는 사용자의 아이디로 대체해야 합니다.

      // 성공적으로 탈퇴되면 필요한 로직을 추가
      // 예: 탈퇴 후 로그아웃 처리, 페이지 리디렉션 등
      setLoggedIn(false); // 예시로 사용한 setLoggedIn은 로그인 상태를 관리하는 상태 업데이트 함수입니다.
    } catch (error) {
      console.error("Error withdrawing user:", error);
      // 추가: 탈퇴 실패 시 에러 처리 로직을 추가
      // 예: 에러 메시지를 표시하는 등
    }
  };

  return (
    <div>
      <div className="my-page-top">마이페이지</div>
      <div className="my-management">회원정보관리</div>
      <div className="my-page-top">마이페이지</div>
      <div className="my-management">회원정보관리</div>

      <div className="my_container">
        <div className="my_table">
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
        <br />

        <div>
          <button className="my-update-btn">
            <div className="my-update-btn-name">정보수정</div>
          </button>

          <button className="my-withdraw-btn">
            <div className="my-withdraw-btn-name">탈퇴하기</div>
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div>
          <Link to="/myreview">
            <button className="my-review-btn">
              <div className="my-review-image">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/23/18/14/fountain-pen-1854169_1280.jpg"
                  alt="내가 쓴 글 이미지"
                />
              </div>
              <div className="my-review-btn-name">내가 쓴 글</div>
            </button>
          </Link>

          <Link to="/mysearch">
            <button className="my-search-btn">
              <div className="my-search-image">
                <img
                  src="https://cdn.pixabay.com/photo/2014/12/27/15/34/notebook-581128_1280.jpg"
                  alt="내 견적확인 이미지"
                />
              </div>
              <div className="my-search-btn-name">내 견적확인</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
