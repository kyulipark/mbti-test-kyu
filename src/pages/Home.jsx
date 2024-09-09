import styled from "styled-components";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <StyledBox>
      <Layout />
      <h2>무료 성격 테스트</h2>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <StyledBox2>
        <div>성격 유형 검사</div>
        <div>성격 유형 이해</div>
        <div>팀 평가</div>
      </StyledBox2>
      <button>테스트 하러 가기</button>
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
`;

const StyledBox2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;
