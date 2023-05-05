// 회원 및 인증과 관련된 api
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { http } from './http';
import { persistor } from '../index';

export const baseURL = 'https://api.smilewha2023.com';
// export const baseURL = 'http://3.37.131.250';
// 회원가입 (POST)
export const RequestSignin = async (id, pw, nickname) => {
  const userData = {
    username: id,
    password: pw,
    nickname: nickname,
  };
  try {
    const response = await axios.post(`${baseURL}/accounts/signup/`, userData);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 로그인 (POST)
export const RequestLogin = async (id, pw) => {
  const userData = {
    username: id,
    password: pw,
  };
  try {
    const response = await axios.post(`${baseURL}/accounts/login/`, userData);
    localStorage.setItem('token', response.data.data.access_token);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 로그아웃
export const RequestLogout = async () => {
  persistor.purge();
  window.localStorage.removeItem('token');
  window.location.replace('/');
};

// 프로필 조회
export const RequestProfile = async token => {
  try {
    const response = await axios.get(`${baseURL}/accounts/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
