import BoothService from './service/boothservice';
import { http } from './http';
import { RequestLogout } from './auth';

export const GetLikes = async (keyword, detail) => {
  try {
    const response = await http.get(`/accounts/likes/?${keyword}=${detail}`);
    return Promise.resolve(response);
  } catch (error) {
    RequestLogout();
    return Promise.reject(error, '좋아요한 부스 조회 실패');
  }
};
export const GetLikesAll = async () => {
  try {
    const response = await http.get(`/accounts/likes/`);
    return Promise.resolve(response);
  } catch (error) {
    RequestLogout();
    return Promise.reject(error, '좋아요한 부스 조회 실패');
  }
};

export const LikeBooth = async boothId => {
  try {
    const response = await BoothService.likeBooth(boothId);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 좋아요 실패');
  }
};

export const UnLikeBooth = async boothId => {
  try {
    const response = await BoothService.unLikeBooth(boothId);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 좋아요 취소 실패');
  }
};

export const GetSearchBooth = async keyword => {
  try {
    const response = await BoothService.getSearchBooth(keyword);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 검색 실패');
  }
};

export const GetLocationBooth = async (day, college, page) => {
  try {
    const response = await BoothService.getLocationBooth(day, college, page);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '장소 부스 조회 실패');
  }
};

export const GetCategoryBooth = async (day, category, page) => {
  try {
    const response = await BoothService.getCategoryBooth(day, category, page);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '카테고리 부스 조회 실패');
  }
};

export const GetDayBooth = async (day, page) => {
  try {
    const response = await BoothService.getDayBooth(day, page);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '모든 부스 조회 실패');
  }
};

export const GetBooth = async boothId => {
  try {
    const response = await BoothService.getBooth(boothId);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 상세 조회 실패');
  }
};

export const SubmitComment = async (boothId, newComment) => {
  try {
    const response = await BoothService.submitComment(boothId, newComment);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 댓글 작성 실패');
  }
};

export const DeleteComment = async (boothId, cId) => {
  try {
    const response = await BoothService.deleteComment(boothId, cId);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 댓글 삭제 실패');
  }
};

export const PatchBooth = async (boothId, name, opened, description) => {
  try {
    const response = await BoothService.patchBooth(
      boothId,
      name,
      opened,
      description,
    );
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 수정 실패');
  }
};

export const PatchBoothNotice = async (boothId, notice, noticeId) => {
  try {
    const response = await BoothService.patchBoothNotice(
      boothId,
      notice,
      noticeId,
    );
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 수정 실패');
  }
};

export const PatchBoothTime = async (boothId, index, time) => {
  try {
    const response = await BoothService.patchBoothTime(boothId, index, time);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '부스 수정 실패');
  }
};

export const GetMenu = async boothId => {
  try {
    const response = await BoothService.getMenu(boothId);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '메뉴 조회 실패');
  }
};

export const PatchMenu = async (boothId, menuId, menu, price, is_soldout) => {
  try {
    const response = await BoothService.patchMenu(
      boothId,
      menuId,
      menu,
      price,
      is_soldout,
    );
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      '이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다'
    ) {
      RequestLogout();
    }
    return Promise.reject(error, '메뉴 수정 실패');
  }
};
