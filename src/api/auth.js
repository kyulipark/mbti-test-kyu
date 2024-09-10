import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

const api = axios.create({
  baseURL: API_URL,
});

// 요청 전에 토큰을 헤더에 추가하는 인터셉터
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await api.post("/login", userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get("/profile");
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await api.put("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export default {
  register,
  login,
  getUserProfile,
  updateProfile,
};
