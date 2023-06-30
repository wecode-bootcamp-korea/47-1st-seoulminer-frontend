import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInput from '../components/SignInput';
import './SignUpSecond.scss';

const SignUpSecond = () => {
  const [inputValue, setInputValue] = useState({});

  let emailRegular =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const emailCondition = inputValue.email?.length > 0;
  const pwCondition = inputValue.pw?.length > 0;
  const checkCondition = inputValue.check === inputValue.pw;
  const nameCondition = inputValue.name?.length > 0;
  const phoneCondition = inputValue.phone?.length === 11;

  const signUpCondition =
    emailCondition &&
    pwCondition &&
    checkCondition &&
    nameCondition &&
    phoneCondition;

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const postUserSignUpData = () => {
    fetch('http://10.58.52.88:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.pw,
        name: inputValue.name,
        phoneNumber: inputValue.phone,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'CREATE_USER_SUCCESS!') {
          navigate('/Main');
        } else if (data.message === 'INVALID_EMAIL') {
          alert('실패 이메일');
        } else if (data.message === 'INVALID_PASSWORD') {
          alert('실패 비밀번호');
        } else if (data.message === 'EMAIL_EXIST') {
          alert('실패 이미 회원 이메일');
        } else if (data.message === 'PHONE_NUMBER_EXIST') {
          alert('실패 이미 회원 폰');
        }
      });
  };

  return (
    <div className="signUpSecond">
      <div className="fullContainer">
        <p className="title">회원가입</p>
        <div className="border" />
        <div className="full">
          <p className="info">회원정보</p>
          <div className="fullInput">
            {USER_SIGN_UP.map(data => {
              return (
                <SignInput
                  key={data.id}
                  name={data.name}
                  placeholder={data.placeholder}
                  handle={e => {
                    return handleInput(e);
                  }}
                />
              );
            })}
          </div>
        </div>
        <button
          className={`signUp ${signUpCondition ? 'greenButton' : ''}`}
          disabled={signUpCondition ? false : true}
          onClick={postUserSignUpData}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUpSecond;

export const USER_SIGN_UP = [
  { id: 1, name: 'email', placeholder: '이메일' },
  { id: 2, name: 'pw', placeholder: '비밀번호' },
  { id: 3, name: 'check', placeholder: '비밀번호 확인' },
  { id: 4, name: 'name', placeholder: '이름' },
  { id: 5, name: 'phone', placeholder: '휴대번호' },
];
