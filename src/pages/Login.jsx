import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Login = () => {
  // const navigate = useNavigate();

  // const loginMutation = useMutation((formData) => login(formData), {
  //   onSuccess: (data) => {
  //     alert("로그인 성공!");
  //     navigate("/profile");
  //   },
  //   onError: (error) => {
  //     alert(`로그인 실패: ${error.message}`);
  //   },
  // });

  // const handleLogin = (formData) => {
  //   loginMutation.mutate({
  //     username: formData.id,
  //     password: formData.password,
  //   });
  // };

  return (
    <StyledBox>
      <h2>로그인</h2>
      {/* <AuthForm mode="login" onSubmit={handleLogin} /> */}
      <StyledInnerBox>
        <input type="text" placeholder="아이디" />
        <input type="number" placeholder="비밀번호" />
        <button>로그인</button>
      </StyledInnerBox>
      <StyledFooter>
        <p>계정이 없으신가요?</p>
        <Link to="/signup">
          <p>회원가입</p>
        </Link>
      </StyledFooter>
    </StyledBox>
  );
};

export default Login;

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
