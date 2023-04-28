import { http } from './http';

export const GetBoothMenus = async id => {
  try {
    const response = await http.get(`/booths/${id}/menus/`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
