import './SignInSecond.scss';

const SignInSecond = () => {
  return (
    <div className="signInSecond">
      <div className="fullContainer">
        <h1>회원가입</h1>
        <div className="border" />
        <div className="full">
          <h3>회원정보</h3>
          <img alt="number" src="" />
        </div>
        <div className="fullInput">
          <input placeholder="아이디" />
          <div className="container">
            <input placeholder="비밀번호" />

            <input placeholder="비밀번호 확인" />
          </div>
          <div className="container">
            <input placeholder="이름" />

            <input placeholder="휴대번호" />
          </div>
          <input placeholder="이메일" />
        </div>
        <p>﹒아이디/비밀번호 찾기에 활용되므로 정확하게 입력해주세요.</p>
        <button>가입하기</button>
      </div>
    </div>
  );
};

export default SignInSecond;
