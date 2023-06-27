// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [inputValue, setInputValue] = useState({});
  const [btnColor, setBtnColor] = useState(true);
  const [inputClass, setInputclass] = useState(true);

  const conditon =
    inputValue?.id?.indexOf('@') !== -1 && inputValue?.pw?.length >= 5;

  // function goToMain() {
  //   navigate('/MainHoejin');
  // }

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const changeBtnColor = () => {
    setBtnColor(!btnColor);
  };

  return (
    <div className="login">
      <p className="title">로그인</p>
      <div className="inputContainer">
        <label className="idLabel">아이디</label>
        <input
          name="id"
          className={`id ${inputValue.id?.length > 0 ? 'idInputLabel' : ''}`}
          onClick={() => setInputclass(!inputClass)}
          onChange={e => {
            handleInput(e);
          }}
        />
        <p className="hidden red">! 아이디를 입력해주세요.</p>
        <label className="pwLabel">비밀번호</label>
        <input
          name="pw"
          className="pw"
          type="password"
          onChange={e => {
            handleInput(e);
          }}
        />
        <p className="hidden red">! 비밀번호를 입력해주세요.</p>
        <div className="saveContainer">
          <input className="checkbox" type="checkbox" />
          <p className="saveId">아이디 저장</p>
        </div>
      </div>
      <button
        className="loginButton"
        disabled={conditon ? false : true}
        onChange={changeBtnColor}
        // onClick={goToMain}
      >
        로그인
      </button>
      <div className="buttonContainer">
        {/* <Link to={"./signIn.js"}> */}
        <button className="admition">회원가입</button>
        {/* </Link> */}
        <p>|</p>
        {/* <Link to={"./signIn.js"}> */}
        <button className="findId">아이디 찾기</button>
        {/* </Link> */}
        <p>|</p>
        {/* <Link to={"./signIn.js"}> */}
        <button className="findPw">비밀번호 찾기</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Login;
