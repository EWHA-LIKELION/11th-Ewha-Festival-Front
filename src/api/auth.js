// 회원 및 인증과 관련된 api
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { http } from './http';

// 회원가입 (POST)
export const RequestSignin = async (id, pw, nickname) => {
  const userData = {
    username: id,
    password: pw,
    nickname: nickname,
  };
  try {
    const response = await axios.post(`/accounts/signup/`, userData);
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
    const response = await http.post(`/accounts/login/`, userData);

    localStorage.setItem('token', response.data.data.access_token);

    window.location.replace('/');

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 로그아웃
export const RequestLogout = async () => {
  window.localStorage.removeItem('token');
  window.location.replace('/');
};
