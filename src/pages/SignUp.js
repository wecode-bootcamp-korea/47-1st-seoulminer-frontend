import './SignUp.scss';
import { Link } from 'react-router-dom';
import { AGREEMENT } from './AGREEMENT';
import { useEffect, useState } from 'react';
import AgreementMap from '../components/AgreementMap';

const SignUp = () => {
  const [isAll, setIsAll] = useState(false);
  const [isChecked, setIsChecked] = useState({ 1: false, 2: false, 3: false });

  const handleChecked = e => {
    const { id, checked } = e.target;
    setIsChecked({ ...isChecked, [id]: checked });
  };

  const isAllChecked = Object.values(isChecked).filter(el => el === true);

  const allChecked = e => {
    const { checked } = e.target;
    setIsAll(prev => !prev);

    let checkedObj = {};
    for (let i = 0; i <= AGREEMENT.length - 1; i++) {
      checkedObj = { ...checkedObj, [AGREEMENT[i].id]: checked };
    }
    setIsChecked(checkedObj);
  };

  const isValid = isChecked[1] && isChecked[2];

  useEffect(() => {
    setIsAll(isAllChecked.length === 3);
  }, [isAllChecked]);

  return (
    <div className="signUp">
      <div className="fullContainer">
        <p className="title">회원가입</p>
        <div className="border" />
        <div className="fullAgreement">
          <p className="subTitle">약관동의</p>
        </div>
        <div className="full">
          <input
            id="all"
            type="checkbox"
            checked={isAll}
            onChange={e => allChecked(e)}
          />
          <p>전체 동의합니다.</p>
        </div>
        <p>
          선택 항목에 동의하지 않은 경우도 회원가입 및 서비스 이용이 가능합니다.
        </p>
        <div className="border" />
        {AGREEMENT.map(data => {
          return (
            <AgreementMap
              key={data.id}
              data={data}
              checked={isChecked[data.id]}
              handleChecked={handleChecked}
            />
          );
        })}
        <Link to="/signUpSecond">
          <button
            className="phone"
            disabled={isValid ? false : true}
            style={{ opacity: `${isValid ? 1 : 0.5}` }}
          >
            다음 페이지로
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
