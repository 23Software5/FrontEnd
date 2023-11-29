import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Mypage.css";
import { Link } from "react-router-dom";
import * as api from "../Api";

const Mypage = () => {
  // 기존의 더미데이터
  const dummyData = {
    name: "사용자 이름",
    email: "user@example.com",
    password: "*********",
    phoneNumber: "010-1234-5678",
  };

  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");

  useEffect(() => {
    // 실제로는 로그인 정보에서 사용자 아이디를 가져와서 사용해야 함
    const userId = "현재 로그인한 사용자의 아이디";

    // axios를 사용하여 백엔드 API 호출
    axios
      .get(`/users/setting/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // 연결이 실패하면 더미데이터 사용
        setUser(dummyData);
      });
  }, []);

  const handleEdit = () => {
    setEditedName(user.name);
    setEditedPhoneNumber(user.phoneNumber);
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser({
      ...user,
      name: editedName,
      phoneNumber: editedPhoneNumber,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChangeName = (e) => {
    setEditedName(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setEditedPhoneNumber(e.target.value);
  };

  if (!user) {
    // API 호출 결과를 기다리는 동안 로딩 상태를 표시할 수 있음
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="my-page-top">마이페이지</div>
      <div className="my-management">회원정보관리</div>

      <div className="my_container">
        <div className="my_table">
          <table>
            <tbody>
              <tr>
                <th>이름</th>
                <td>
                {isEditing ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={handleChangeName}
                    />
                  ) : (
                    user.name
                  )}
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>{user.password}</td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>
                {isEditing ? (
                    <input
                      type="text"
                      value={editedPhoneNumber}
                      onChange={handleChangePhoneNumber}
                    />
                  ) : (
                    user.phoneNumber
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <div>
          {isEditing ? (
            <>
              <button className="my-save-btn" onClick={handleSave}>
                <div className="my-update-btn-name">저장</div>
              </button>
              <button className="my-cancel-btn" onClick={handleCancel}>
                <div className="my-update-btn-name">취소</div>
              </button>
            </>
          ) : (
            <button className="my-update-btn" onClick={handleEdit}>
              <div className="my-update-btn-name">정보수정</div>
            </button>
          )}

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
