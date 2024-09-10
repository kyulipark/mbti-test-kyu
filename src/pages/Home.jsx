import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyledBox>
      <h2>무료 성격 테스트</h2>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <StyledBox2>
        <div>
          <h4>성격 유형 검사</h4>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div>
          <h4>성격 유형 이해</h4>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div>
          <h4>팀 평가</h4>
          <p>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </StyledBox2>
      <Link to="/test">
        <button>테스트 하러 가기</button>
      </Link>
    </StyledBox>
  );
};

export default Home;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  p {
    font-size: small;
    margin-top: 0px;
  }
`;

const StyledBox2 = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  div {
    flex: 3;
    margin: 0 20px;
    padding: 20px;
    width: 200px;
    text-align: center;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

    p {
      font-size: small;
      font-weight: 400px;
      color: #ccc;
      text-align: justify;

      display: flex;
      justify-content: center;
    }
  }
`;
