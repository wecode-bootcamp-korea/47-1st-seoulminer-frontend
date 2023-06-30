import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const footerInfoData = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/notice',
    text: '공지사항',
  },
  {
    path: '/terms',
    text: '이용약관',
  },
  {
    path: '/privacy',
    text: '개인정보처리방침',
  },
  {
    path: '/partnership',
    text: '대량/제휴안내',
  },
  {
    path: '/instagram',
    text: (
      <>
        <FontAwesomeIcon icon={faInstagram} />
        baemin
      </>
    ),
  },
];
