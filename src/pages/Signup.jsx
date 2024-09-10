import { Link } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  return (
    <StyledBox>
      <h2>회원가입</h2>
      <StyledInnerBox>
        <input placeholder="아이디" />
        <input placeholder="비밀번호" />
        <input placeholder="닉네임" />
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
