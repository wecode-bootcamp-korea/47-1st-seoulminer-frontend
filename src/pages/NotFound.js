import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="container">
        <p className="title">Error - 404</p>
        <p className="text">
          죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셨습니다.
        </p>
        <p className="text">존재하지 않는 주소를 입력하셨거나,</p>
        <p className="text">
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </p>
        <Link to="/" className="link">
          <button className="goToMain">메인으로</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
