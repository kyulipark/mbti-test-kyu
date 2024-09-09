import { Link } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/login">로그인</Link>
        </nav>
      </StyledHeader>
    </div>
  );
};

export default Layout;

const StyledHeader = styled.div`
  background-color: #c2c2c2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5vh;
  width: 100%;
`;
