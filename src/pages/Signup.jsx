import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../api/auth";
// import AuthForm from "../components/AuthForm";

const Signup = () => {
  // const navigate = useNavigate();

  // const signupMutation = useMutation((formData) => register(formData), {
  //   onSuccess: () => {
  //     alert("회원가입이 완료되었습니다.");
  //     navigate("/login");
  //   },
  //   onError: (error) => {
  //     alert(`회원가입 실패: ${error.message}`);
  //   },
  // });

  // const handleSignup = (formData) => {
  //   signupMutation.mutate({
  //     username: formData.id,
  //     password: formData.password,
  //     nickname: formData.nickname,
  //   });
  // };

  return (
    <StyledBox>
      <h2>회원가입</h2>
      {/* <AuthForm mode="signup" onSubmit={handleSignup} /> */}
      <StyledInnerBox>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="닉네임" />
        <input type="number" placeholder="비밀번호" />
        <button>회원가입</button>
      </StyledInnerBox>
      <StyledFooter>
        <p>이미 계정이 있으신가요?</p>
        <div>
          <Link to="/login">
            <p color="">로그인</p>
          </Link>
        </div>
      </StyledFooter>
    </StyledBox>
  );
};

export default Signup;

const StyledBox = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200%;
  border-radius: 8px;

  h2 {
    color: #1c0675;
  }
`;

const StyledInnerBox = styled.div`
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 20vh;
  border-radius: 4px;
  padding: 10px;

  input {
    height: 35px;
    width: 80%;
    margin: 5px 10px;
  }
`;

const StyledFooter = styled.div`
  display: flex;
  margin: 8px 0px;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-small;
    color: #626262;
    margin: 4px;
  }
`;
