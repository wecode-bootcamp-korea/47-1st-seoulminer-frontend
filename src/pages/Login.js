import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignInput from './SignInput';
import './Login.scss';

const INPUT_DATA = [
  { id: 1, name: 'id', placeholder: '아이디', type: 'text' },
  { id: 2, name: 'pw', placeholder: '비밀번호', type: 'password' },
];

const Login = () => {
  const [inputValue, setInputValue] = useState({});
  const [btnColor, setBtnColor] = useState(true);
  const [modalBtn, setModalBtn] = useState('none');
  const navigate = useNavigate();

  const conditon = inputValue.id?.length > 0 && inputValue.pw?.length > 0;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const data = () => {
    fetch('http://10.58.52.109:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue.id,
        password: inputValue.pw,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        if (data.message === 'Login success') {
          localStorage.setItem('token', data.accessToken);
          navigate('/Main');
        } else if (data.message === '잘못된정보') {
          alert('아이디 혹은 비밀번호를 확인 해 주세요');
        }
      });
  };

  const saveIdLocal = () => {
    localStorage.setItem('ID', inputValue.id);
  };

  const removeIdLocal = () => {
    localStorage.removeItem('ID');
  };

  return (
    <div className="login">
      <p className="title">로그인</p>
      <div className="inputContainer">
        {INPUT_DATA.map(data => {
          return (
            <SignInput
              key={data.id}
              name={data.name}
              placeholder={data.placeholder}
              type={data.type}
              handle={e => {
                return handleInput(e);
              }}
            />
          );
        })}
        <div className="saveContainer">
          <input className="checkbox" type="checkbox" />
          <p className="saveId">아이디 저장</p>
        </div>
      </div>
      <button
        className={`loginButton ${conditon ? 'greenButton' : ''}`}
        disabled={conditon ? false : true}
        onChange={() => {
          setBtnColor(!btnColor);
        }}
        onClick={data}
      >
        로그인
      </button>
      <div className="buttonContainer">
        <Link to="./SignIn.js">
          <button className="admition">회원가입</button>
        </Link>
        <p>|</p>
        {/* <Link to={"./signIn.js"}> */}
        <button className="findId">아이디 찾기</button>
        {/* </Link> */}
        <p>|</p>
        {/* <Link to={"./signIn.js"}> */}
        <button className="findPw">비밀번호 찾기</button>
        {/* </Link> */}
      </div>
      <div
        className="modalBlack"
        style={{ display: `${modalBtn ? 'block' : 'none'}` }}
      >
        <div className="modal">
          <div className="text">
            <p className="auch">앗!</p>
            <p>회원정보를 찾을 수 없습니다.</p>
            <p>아이디/비밀번호를 다시 확인해주세요.</p>
          </div>
          <button onClick={() => setModalBtn(!btnColor)}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
