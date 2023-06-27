import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <p className="title">로그인</p>
      <div className="inputContainer">
        <input className="id" placeholder="아이디" />
        <p>! 아이디를 입력해주세요.</p>
        <input className="pw" placeholder="비밀번호" />
        <p>! 비밀번호를 입력해주세요.</p>
        <div className="saveContainer">
          <input className="checkbox" type="checkbox" />
          <p className="saveId">아이디 저장</p>
        </div>
      </div>
      <button className="loginButton">로그인</button>
      <div className="buttonContainer">
        <button className="admition">회원가입</button>
        <p>|</p>
        <button className="findId">아이디 찾기</button>
        <p>|</p>
        <button className="findPw">비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default Login;
