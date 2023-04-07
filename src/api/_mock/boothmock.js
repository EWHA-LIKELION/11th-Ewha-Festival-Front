export const boothdetail = {
  message: '부스 상세 조회 성공',
  data: {
    id: 1,
    user: 1,
    day: ['수요일', '목요일', '금요일'],
    college: '포스코관',
    name: '멋쟁이 사자처럼',
    number: '포08',
    thumnail: '',
    open: false,
    notice: '떡꼬치 품절',
    hashtag: '#떡꼬치',
    description: '멋쟁이 사자처럼 부스 소개 어쩌구 저쩌구 안녕하세요 뿡뿡',
    images: [
      {
        id: 1,
        image: '',
      },
    ],
    menus: [
      {
        id: 1,
        menu: '떡꼬치',
        price: 2000,
        is_soldout: true,
      },
      {
        id: 2,
        menu: '떡볶이',
        price: 3000,
        is_soldout: false,
      },
    ],
    is_liked: true,
    created_at: '2022-08-12 16:21',
    updated_at: '2022-08-12 22:34',
    comments: [
      {
        id: 6,
        booth: 1,
        user: 'testuser',
        content: '뿡뿡',
        created_at: '2022-08-28 19:16',
        updated_at: '2022-08-28 19:28',
      },
      {
        id: 9,
        booth: 1,
        user: '1234',
        content: '뿡뿡',
        created_at: '2022-08-28 19:29',
        updated_at: '2022-08-28 19:29',
      },
    ],
  },
};
