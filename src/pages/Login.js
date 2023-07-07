import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignInput from '../components/SignInput';
import './Login.scss';

const Login = () => {
  const [inputValue, setInputValue] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // const localSaveId = localStorage.getItem('ID')?.length > 0 ||

  const conditon = inputValue.id?.length > 0 && inputValue.pw?.length > 0;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const postUserData = () => {
    fetch('http://10.58.52.243:3000/users/signin', {
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
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        } else if (data.message === 'USER_IS_NOT_VALID') {
          setIsModalOpen(true);
        }
      });
  };

  // const saveIdLocal = e => {
  //   if (e.target.checked === true) {
  //     localStorage.setItem('ID', inputValue.id);
  //   } else if (e.target.checked === false) {
  //     localStorage.removeItem('ID');
  //   }
  // };

  return (
    <div className="login">
      <p className="title">로그인</p>
      <div className="inputContainer">
        <SignInput
          className="id"
          name="id"
          placeholder="아이디"
          type="text"
          defaultValue={localStorage.getItem('ID')}
          handle={e => {
            return handleInput(e);
          }}
        />
        <SignInput
          className="pw"
          name="pw"
          placeholder="비밀번호"
          type="password"
          handle={e => {
            return handleInput(e);
          }}
        />

        {/* <div className="saveContainer">
          <input
            className="checkbox"
            type="checkbox"
            onClick={e => saveIdLocal(e)}
            checked={localStorage.getItem('ID')}
          />
          <p className="saveId" name="checkbox">
            아이디 저장
          </p>
        </div> */}
      </div>
      <button
        className={`loginButton ${conditon ? 'greenButton' : ''}`}
        disabled={conditon ? false : true}
        onClick={postUserData}
      >
        로그인
      </button>
      <div className="buttonContainer">
        <Link to="/signUp">
          <button className="admition">회원가입</button>
        </Link>
        <p>|</p>
        <button className="findId">아이디 찾기</button>
        <p>|</p>
        <button className="findPw">비밀번호 찾기</button>
      </div>
      {isModalOpen && (
        <div className="modalBlack">
          <div className="modal">
            <div className="text">
              <p className="auch">앗!</p>
              <p className="notFound">회원정보를 찾을 수 없습니다.</p>
              <p className="notFound">아이디/비밀번호를 다시 확인해주세요.</p>
            </div>
            <button onClick={() => setIsModalOpen(false)}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
