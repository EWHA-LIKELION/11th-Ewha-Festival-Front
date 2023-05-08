import posco from '../../assets/images/trashbinpage/posco.webp';
import studentunion from '../../assets/images/trashbinpage/studentunion.webp';
import humanechology from '../../assets/images/trashbinpage/humanecology.webp';
import maingate from '../../assets/images/trashbinpage/maingate.webp';
import auditorium from '../../assets/images/trashbinpage/auditorium.webp';
import education from '../../assets/images/trashbinpage/education.webp';

export const photoData = [
  education,
  posco,
  studentunion,
  humanechology,
  auditorium,
  maingate,
];

export const locationData = [
  {
    id: 1,
    name: '교육관 쓰레기통 위치',
    info: '교육관 2번 부스 옆',
    top: '23',
    left: '48.5',
    selected: false,
  },
  {
    id: 2,
    name: '포스코관 쓰레기통 위치',
    info: '포스코 - 진선미관 사이',
    top: '35',
    left: '54',
    selected: false,
  },
  {
    id: 3,
    name: '학생문화관 쓰레기통 위치',
    info: '학생문화관 1층 출입구 우측\n학생문화관 숲 중간 통로 옆\n학생문화관 - ECC 연결 보도 안쪽',
    top: '42',
    left: '46',
    selected: true,
  },
  {
    id: 4,
    name: '생활환경관 쓰레기통 위치',
    info: '생활환경관 부스 끝 모서리',
    top: '49',
    left: '39',
    selected: false,
  },
  {
    id: 5,
    name: '대강당 쓰레기통 위치',
    info: '생활환경관 20번 부스 옆',
    top: '54',
    left: '44',
    selected: false,
  },
  {
    id: 6,
    name: '정문 쓰레기통 위치',
    info: '잔디광장 24번 부스 옆',
    top: '70',
    left: '60',
    selected: false,
  },
];
