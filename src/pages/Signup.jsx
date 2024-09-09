import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h2>회원가입</h2>
      <input placeholder="아이디" />
      <input placeholder="비밀번호" />
      <input placeholder="닉네임" />
      <button>회원가입</button>
      <p>이미 계정이 있으신가요?</p>
      <Link to="/login">
        <p>로그인</p>
      </Link>
    </div>
  );
};

export default Signup;
