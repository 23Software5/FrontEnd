import axios from "axios";

const baseUrl = "http://localhost:8080"; // 서버의 주소에 맞게 수정

export const registerUser = async (userData) => {
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
  try {
    const response = await axios.post(`${baseUrl}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.put(`${baseUrl}/users/logout`);
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export const deleteUserAccount = async (userId) => {
  try {
    const response = await axios.delete(`${baseUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user account:", error);
  }
};

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/users/setting/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const getAllReviews = async () => {
  try {
    const response = await axios.get(`${baseUrl}/reviews`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

export const createReview = async (reviewData) => {
  try {
    const response = await axios.post(`${baseUrl}/reviews/create`, reviewData);
    return response.data;
  } catch (error) {
    console.error("Error creating review:", error);
  }
};

export const getReviewById = async (reviewId) => {
  try {
    const response = await axios.get(`${baseUrl}/reviews/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching review:", error);
  }
};

export const getAllFuneralHalls = async () => {
  try {
    const response = await axios.get(`${baseUrl}/funeralhalls`);
    return response.data;
  } catch (error) {
    console.error("Error fetching funeral halls:", error);
  }
};

export const getFuneralHallDetails = async (funeralHallId) => {
  try {
    const response = await axios.get(
      `${baseUrl}/funeralhalls/${funeralHallId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching funeral hall details:", error);
  }
};
