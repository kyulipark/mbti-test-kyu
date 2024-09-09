import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>로그인</h2>
      <input placeholder="아이디" />
      <input placeholder="비밀번호" />
      <button>로그인</button>
      <p>계정이 없으신가요?</p>
      <Link to="/signup">
        <p>회원가입</p>
      </Link>
    </div>
  );
};

export default Login;
