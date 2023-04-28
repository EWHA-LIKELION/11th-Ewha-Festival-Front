import menu1 from '../../assets/images/boothdetailpage/menu1.png';
import menu2 from '../../assets/images/boothdetailpage/menu2.png';
import menu3 from '../../assets/images/boothdetailpage/menu3.png';
import menu4 from '../../assets/images/boothdetailpage/menu4.png';
import menu5 from '../../assets/images/boothdetailpage/menu5.png';

export const boothdetail = {
  message: '부스 상세 조회 성공',
  data: {
    id: 1,
    user: 1,
    day: ['수요일', '목요일', '금요일'],
    college: '포스코관',
    category: ['음식', '굿즈'],
    name: '멋쟁이 사자처럼',
    number: '08',
    thumnail: '',
    opened: true,
    notice: {
      text: '아직 공지사항이 없습니다.',
      updated_at: '2023-04-04 12:34',
    },
    hashtag: '#떡꼬치 #동아리 #어쩌구',
    description:
      'Lorem ipsum dolor sit amet, http://www.instagram.com/likelion_ewha consectetur adipiscing elit. Vestibulum luctus eget lorem vitae placerat. Curabitur ut massa gravida metus lacinia consequat. Nunc nisl lorem, pharetra eu quam sed, fringilla maximus arcu. Phasellus aliquam velit vel tempus laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ornare varius congue. Nunc non tortor et justo blandit consequat sed quis libero. Nam eget sagittis ligula. In fermentum nulla at metus pretium placerat. Curabitur gravida id sapien et pulvinar. Cras eget rhoncus lacus. Vivamus venenatis nisi eu porta convallis. Duis velit tellus, scelerisque viverra enim pharetra, tempus tristique libero. Aliquam lorem erat, tempor sit amet sodales eu, viverra non ante. Cras nisl ligula, pharetra a purus eget, dapibus bibendum ante.\n\nNulla facilisi. Donec consectetur viverra interdum. Fusce dictum dictum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam bibendum quam non risus imperdiet, vel scelerisque dolor dapibus. Aenean eu condimentum purus. Integer dictum tincidunt tortor, ac mattis arcu dapibus nec. Nulla dictum in tortor id interdum. Vestibulum vel justo elementum, lacinia leo ac, pellentesque nibh.',
    images: [
      {
        id: 1,
        image: menu1,
      },
      {
        id: 2,
        image: menu2,
      },
      {
        id: 3,
        image: menu3,
      },
      {
        id: 4,
        image: menu4,
      },
      {
        id: 5,
        image: menu5,
      },
    ],
    menus: [
      {
        id: 1,
        menu: '일이삼사오육칠팔구십일이삼사오',
        price: 2000,
        is_soldout: true,
      },
      {
        id: 2,
        menu: '일이삼사오육칠팔구십일이삼사오',
        price: 8088,
        is_soldout: false,
      },
      {
        id: 3,
        menu: '일이삼사오육칠팔구십일이삼사오',
        price: 2000,
        is_soldout: true,
      },
      {
        id: 4,
        menu: '일이삼사오육칠팔구십일이삼사오',
        price: 8088,
        is_soldout: true,
      },
    ],
    is_liked: true,
    created_at: '2022-08-12 16:21',
    updated_at: '2022-08-12 22:34',
    comments: [
      {
        id: 6,
        booth: 1,
        user: { id: 1, nickname: '나는 관리자' },
        content: '뿡뿡',
        created_at: '2022-08-28 19:16',
        updated_at: '2022-08-28 19:28',
      },
      {
        id: 9,
        booth: 1,
        user: { id: 2, nickname: '관리자 아님' },
        content: '알나ㅓㄹ아ㅓ라너댜러ㅜ치아ㅣㄴㄹ앙ㅇ \nㄴ아ㅣㄴㅇ라 래대러대',
        created_at: '2022-08-28 19:29',
        updated_at: '2022-08-28 19:29',
      },
    ],
  },
};
