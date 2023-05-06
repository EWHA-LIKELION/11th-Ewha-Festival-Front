import { useNavigate } from 'react-router-dom';
// style
import { C } from './Booth.style';
// image
import fillheart from '../../assets/images/fillheart.svg';
import strokeheart from '../../assets/images/strokeheart.png';
import defaultthumbnail from '../../assets/images/boothdetailpage/defaultthumbnail.svg';

import { LikeBooth, UnLikeBooth } from '../../api/booth';

const BoothComponent = props => {
  const {
    id,
    college,
    number,
    category,
    name,
    hashtag,
    is_liked,
    thumnail,
    opened,
    setChangeLike,
    changeLike,
  } = props;

  const { booth, setBooth } = props;

  const navigate = useNavigate();

  const Like = id => {
    const token = localStorage.getItem('token');

    if (token) {
      // 하트 ui 수정
      setBooth(
        booth.map(props =>
          props.id === id ? { ...props, is_liked: true } : { ...props },
        ),
      );
    }
    // 좋아요 api 요청 보내기
    LikeBooth(id)
      .then(res => {
        setChangeLike(!changeLike);
      })
      .catch(err => {
        if (err.response.status === 401) {
          if (window.confirm('로그인 후 북마크 기능을 사용하실 수 있습니다.'))
            navigate('/auth/login');
          else return;
        }
      });
  };

  const unLike = id => {
    // 하트 ui 수정
    setBooth(
      booth.map(props =>
        props.id === id ? { ...props, is_liked: false } : { ...props },
      ),
    );
    // 좋아요 삭제 api
    UnLikeBooth(id)
      .then(res => {
        setChangeLike(!changeLike);
      })
      .catch(err => {});
  };

  return (
    <>
      <C.ComponentContainer>
        <C.ImageWrapper
          closed={opened ? false : true}
          onClick={() => navigate(`/booth/detail/${id}`)}
        >
          <img src={thumnail ? thumnail : defaultthumbnail} />
          {opened ? '' : <div className='closed'>운영 종료</div>}
        </C.ImageWrapper>
        <C.TitleWrapper>
          <div className='inner'>
            <C.Location closed={opened ? false : true}>
              {college}
              {number} <span>·</span>
              {category.map(props => (
                <span key={category.indexOf(props)}>
                  {props}
                  {/* {category.indexOf(props) == category.length - 1 ? '' : ' / '} */}
                </span>
              ))}
            </C.Location>
            <C.BoothTitle
              closed={opened ? false : true}
              length={name.length}
              onClick={() => navigate(`/booth/detail/${id}`)}
            >
              {name}
            </C.BoothTitle>
            <C.Hashtag closed={opened ? false : true}>{hashtag}</C.Hashtag>
          </div>
          <C.Bookmark onClick={() => (is_liked ? unLike(id) : Like(id))}>
            <img width='16px' src={is_liked ? fillheart : strokeheart} />
          </C.Bookmark>
        </C.TitleWrapper>
      </C.ComponentContainer>
    </>
  );
};

export default BoothComponent;
