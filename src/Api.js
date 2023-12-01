import axios from "axios";

const baseUrl = "http://localhost:8080";

export const registerUser = async (userData) => {
  //회원가입
  try {
    const response = await axios.post(`${baseUrl}/users/newuser`, userData);
    console.log("User registration successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.message);
    return Promise.reject(error);
  }
};

export const loginUser = async (credentials) => {
  //로그인
  try {
    const response = await axios.post(`${baseUrl}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const logoutUser = async () => {
  //로그아웃
  try {
    const response = await axios.put(`${baseUrl}/users/logout`);
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export const deleteUserAccount = async (userId) => {
  //계정 탈퇴
  try {
    const response = await axios.delete(`${baseUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user account:", error);
  }
};

export const getUserProfile = async (userId) => {
  //마이페이지 조회
  try {
    const response = await axios.get(`${baseUrl}/users/settings/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const getAllReviews = async () => {
  //후기 전체 조회
  try {
    const response = await axios.get(`${baseUrl}/reviews`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

export const createReview = async (reviewData) => {
  //후기 생성
  try {
    const response = await axios.post(`${baseUrl}/reviews/create`, reviewData);
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
  }
};

export const getReviewById = async (userId) => {
  //후기 조회
  try {
    const response = await axios.get(`${baseUrl}/reviews/${userId}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching review:", error);
  }
};

export const getAllFuneralHalls = async () => {
  //장례식장 목록 조회
  try {
    const response = await axios.get(`${baseUrl}/funeralhalls`);
    return response.data;
  } catch (error) {
    console.error("Error fetching funeral halls:", error);
  }
};

export const getFuneralHallDetails = async (funeralHallId) => {
  //장례식장 상세정보 조회
  try {
    const response = await axios.get(
      `${baseUrl}/funeralhalls/${funeralHallId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching funeral hall details:", error);
  }
};

export const checkEstimate = async (userId) => {
  //견적조회
  try {
    const response = await axios.get(`${baseUrl}/requests/by-user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching check estimate:", error);
  }
};
