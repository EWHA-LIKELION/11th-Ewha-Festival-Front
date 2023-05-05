import { http } from '../http';

const BoothService = {
  // 부스 검색
  getSearchBooth: keyword => http.get(`/booths/search/?keyword=${keyword}`),
  // 요일, 장소에 따른 부스 조회
  getLocationBooth: (day, college) =>
    http.get(`/booths/?day=${day}&college=${college}`),
  // 요일, 카테고리에 따른 부스 조회
  getCategoryBooth: (day, category) =>
    http.get(`/booths/?day=${day}&category=${category}`),
  likeBooth: boothId =>
    http.post(`/booths/${boothId}/likes/
`),
  unLikeBooth: boothId =>
    http.delete(`/booths/${boothId}/likes/
`),
  getDayBooth: day => http.get(`/booths/?day=${day}`), // 모든 부스 조회
  getBooth: boothId => http.get(`/booths/${boothId}/`), // 부스 상세
  submitComment: (boothId, newComment) =>
    http.post(`/booths/${boothId}/comments/`, { content: newComment }), //댓글 작성
  deleteComment: (boothId, cId) =>
    http.delete(`/booths/${boothId}/comments/${cId}/`), //댓글 삭제
  // 부스 수정
  patchBooth: (boothId, name, opened, description) =>
    http.patch(`/booths/${boothId}/`, {
      name: name,
      description: description,
      opened: opened,
    }),
  // 부스 공지사항 수정
  patchBoothNotice: (boothId, notice) =>
    http.patch(`/booths/${boothId}/notices/1/`, {
      content: notice,
    }),
  // 부스 운영시간 수정
  patchBoothTime: (boothId, index, time) =>
    http.patch(`/booths/${boothId}/times/${index}/`, {
      time: time,
    }),
  // 메뉴 조회
  getMenu: boothId => http.get(`/booths/${boothId}/menus/`),
  // 메뉴 수정
  patchMenu: (boothId, menuId, menu, price, is_soldout) =>
    http.patch(`/booths/${boothId}/menus/${menuId}/`, {
      menu: menu,
      price: price,
      is_soldout: is_soldout,
    }),
};

export default BoothService;
