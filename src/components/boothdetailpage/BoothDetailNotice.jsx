import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetBooth } from '../../api/booth';
import { COM, N } from './BoothDetail.style';
import { AiOutlineNotification } from 'react-icons/ai';

const BoothDetailNotice = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    GetBooth(id)
      .then(res => setNotice(res.data.data.notices[0]))
      .catch();
  }, []);
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const replace = content => {
    const convertContent = content.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
    const htmlArr = [];
    convertContent.split('\n').forEach(function (text) {
      const textHtml = '<span>' + text + '</span>';
      htmlArr.push(textHtml);
    });
    return { __html: htmlArr.join('') };
  };
  return (
    <COM.Wrapper>
      <N.Container>
        <N.Box>
          <AiOutlineNotification fill='var(--green1)' size='25' />
          <N.TextContainer>
            <N.Title>실시간 공지사항</N.Title>
            {notice && (
              <>
                <N.Text>
                  {notice.content &&
                    (notice.content.includes('\n') ? (
                      <>
                        {notice.content.split('\n').map((line, idx) => {
                          return (
                            <span key={idx}>
                              <span dangerouslySetInnerHTML={replace(line)} />
                              <br />
                            </span>
                          );
                        })}
                      </>
                    ) : (
                      <span dangerouslySetInnerHTML={replace(notice.content)} />
                    ))}
                </N.Text>
                <N.Time>update {notice.updated_at}</N.Time>
              </>
            )}
          </N.TextContainer>
        </N.Box>
      </N.Container>
    </COM.Wrapper>
  );
};

export default BoothDetailNotice;
