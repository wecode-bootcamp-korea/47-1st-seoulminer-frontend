import React from 'react';
import { Link } from 'react-router-dom';
import { footerInfoData } from './FooterData';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerInfo">
          <p className="footerLogo">꿀빵 앙꼬</p>
          {footerInfoData.map((item, index) => (
            <Link key={index} to={item.path}>
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
        <div className="information">
          상호 : (주)꿀빵이와앙꼬 | 대표 : 김덕화 | 사업자등록번호 :
          122-81-35423 | 통신판매업신고번호 : 2011-서울강남-0115 |
          사업자정보확인
          <br /> 대표번호 : 1172-1902 | 이메일 : nnning21_se@jiwon.com | 주소 :
          서울특별시 강남구 테헤란로 1004-104 | 호스팅제공 : (주)꿀빵이와앙꼬 |
          <br /> © DukHwa Kim Corp. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
