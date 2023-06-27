import './SignIn.scss';
import { AGREEMENT } from './AGREEMENT';

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="fullContainer">
        <h1>회원가입</h1>
        <div className="border" />
        <div className="fullAgreement">
          <p>약관동의</p>
          <img alt="number" src="" />
        </div>
        <div className="full">
          <input type="checkbox" />
          <p>전체 동의합니다.</p>
        </div>
        <p>
          선택 항목에 동의하지 않은 경우도 회원가입 및 서비스 이용이 가능합니다.
        </p>
        <div className="border" />
        {AGREEMENT.map(ele => {
          return (
            <div className="container" key={ele.id}>
              <div className="line">
                <div className="full">
                  <input type="checkbox" />
                  <p>{ele.name}</p>
                </div>
                <img alt="cramps" src="" />
              </div>
              <div className="hidden">{ele.explanation}</div>
            </div>
          );
        })}
        <div className="full">
          <input type="checkbox" />
          <p>(선택) 마케팅 정보 수신 동의</p>
        </div>

        <div className="full">
          <div className="full">
            <input type="checkbox" />
            <p>SMS</p>
          </div>
          <div className="full">
            <input type="checkbox" />
            <p>이메일</p>
          </div>
        </div>
        <button className="phone">휴대폰 본인인증</button>
      </div>
    </div>
  );
};

export default SignIn;
