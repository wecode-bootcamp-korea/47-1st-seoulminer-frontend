import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpSecond.scss';

const SignUpSecond = () => {
  const [inputValue, setInputValue] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  let emailRegular =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  let pwRegular = /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{10,16}$/;

  const emailCondition = emailRegular.test(inputValue.email);
  const passwordCondition = pwRegular.test(inputValue.password);
  const pwCheckCondition = inputValue.pwCheck === inputValue.password;
  const nameCondition = inputValue.name?.length > 0;
  const phoneNumberCondition = inputValue.phoneNumber?.length === 11;

  const signUpCondition =
    emailCondition &&
    passwordCondition &&
    pwCheckCondition &&
    nameCondition &&
    phoneNumberCondition;

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const postUserSignUpData = () => {
    fetch('http://10.58.52.243:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValue),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'CREATE_USER_SUCCESS!') {
          setIsModalOpen(true);
          setTimeout(() => setIsModalOpen(false), 3000);
          setTimeout(() => navigate('/'), 3000);
        } else if (data.message === 'INVALID_EMAIL') {
          alert('이메일 형식에 맞지 않는 이메일입니다. 다시 확인해주세요.');
        } else if (data.message === 'INVALID_PASSWORD') {
          alert('비밀번호 형식에 맞지 않는 비밀번호입니다. 다시 확인해주세요.');
        } else if (data.message === 'EMAIL_EXIST') {
          alert('이미 회원인 이메일입니다. 아이디 찾기를 해주세요.');
        } else if (data.message === 'PHONE_NUMBER_EXIST') {
          alert('이미 회원인 전화번호입니다. 아이디 찾기를 해주세요.');
        }
      });
  };

  const INPUT_DATA = [
    { id: 1, name: 'email', placeholder: '이메일', className: emailCondition },
    {
      id: 2,
      name: 'password',
      placeholder: '비밀번호',
      className: passwordCondition,
    },
    {
      id: 3,
      name: 'pwCheck',
      placeholder: '비밀번호 확인',
      className: pwCheckCondition,
    },
    { id: 4, name: 'name', placeholder: '이름', className: nameCondition },
    {
      id: 5,
      name: 'phoneNumber',
      placeholder: '휴대번호',
      className: phoneNumberCondition,
    },
  ];

  const makeClassName = className => {
    return className ? 'inputTag' : 'inputTag red';
  };

  return (
    <div className="signUpSecond">
      <div className="fullContainer">
        <p className="signUpTitle">회원가입</p>
        <div className="border" />
        <div className="full">
          <p className="info">회원정보</p>
          <div className="fullInput">
            {INPUT_DATA.map(({ id, name, placeholder, className }) => {
              return (
                <input
                  key={id}
                  name={name}
                  placeholder={placeholder}
                  className={makeClassName(className)}
                  onChange={handleInput}
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
        {isModalOpen && (
          <div className="modalBlack">
            <div className="welcom">
              <p className="welcomTitle">환영합니다.</p>
              <p className="welcomText">
                <span className="textColor">꿀빵이와 앙꼬</span>의 회원이
                되었습니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpSecond;
