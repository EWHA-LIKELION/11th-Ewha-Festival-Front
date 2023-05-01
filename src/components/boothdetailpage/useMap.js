import auditorium from '../../assets/images/map/auditorium.png';
import ecc from '../../assets/images/map/ecc.png';
import education from '../../assets/images/map/education.png';
import humanecology from '../../assets/images/map/humanecology.png';
import maingate from '../../assets/images/map/maingate.png';
import posco from '../../assets/images/map/posco.png';
import shinsegae from '../../assets/images/map/shinsegae.png';
import studentunion from '../../assets/images/map/studentunion.png';

export const useMap = college => {
  if (college === '대강당') return auditorium;
  else if (college === '휴웃길') return ecc;
  else if (college === '교육관') return education;
  else if (college === '생활관') return humanecology;
  else if (college === '정문') return maingate;
  else if (college === '포스코관') return posco;
  else if (college === '신세계관') return shinsegae;
  else if (college === '학문관') return studentunion;
  else console.log('올바르지 않은 구역 정보');
};
