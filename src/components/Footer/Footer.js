import React from 'react';
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerInfo">
          <p className="footerLogo">배민배민배</p>
          <Link to="">
            <span>About</span>
          </Link>
          <Link to="">
            <span>공지사항</span>
          </Link>
          <Link to="">
            <span>이용약관</span>
          </Link>
          <Link to="">
            <span>개인정보처리방침</span>
          </Link>
          <Link to="">
            <span>대량/제휴안내</span>
          </Link>
          <Link to="">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
              baemin
            </span>
          </Link>
        </div>
        <div className="information">
          상호 : (주)배고픔졸림 | 대표 : 김덕화 | 사업자등록번호 : 122-81-35423
          | 통신판매업신고번호 : 2011-서울강남-0115 | 사업자정보확인
          <br /> 대표번호 : 1172-1902 | 이메일 : nnning21_se@jiwon.com | 주소 :
          서울특별시 강남구 테헤란로 1004-104 | 호스팅제공 : (주)배고픔졸림 |
          <br /> © Woowa Brothers Corp. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
