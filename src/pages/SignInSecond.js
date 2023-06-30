import SignInput from '../components/SignInput';
import './SignInSecond.scss';

const SignInSecond = () => {
  return (
    <div className="signInSecond">
      <div className="fullContainer">
        <p className="title">회원가입</p>
        <div className="border" />
        <div className="full">
          <h3>회원정보</h3>
          <div className="fullInput">
            {USER_SIGN_UP.map(data => {
              <SignInput
                key={data.id}
                name={data.name}
                placeholder={data.placeholder}
                // handle={e => {
                //   return handleInput(e);
                // }}
              />;
            })}

            <input placeholder="아이디" />
            <input placeholder="비밀번호" />
            <input placeholder="비밀번호 확인" />
            <input placeholder="이름" />
            <input placeholder="휴대번호" />
            <input placeholder="이메일" />
          </div>
        </div>
        <button className="singUp">가입하기</button>
      </div>
    </div>
  );
};

export default SignInSecond;

export const USER_SIGN_UP = [
  { id: 1, name: 'email', placeholder: '이메일' },
  { id: 2, name: 'pw', placeholder: '비밀번호' },
  { id: 3, name: 'check', placeholder: '비밀번호 확인' },
  { id: 4, name: 'name', placeholder: '이름' },
  { id: 5, name: 'phone', placeholder: '휴대번호' },
];
