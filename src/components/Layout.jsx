import { Link, Outlet } from "react-router-dom";
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

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

const StyledHeader = styled.div`
  background-color: #c2c2c2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  min-width: 100%;
  padding: 0 60px;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;

    &:hover {
      color: #26bcaa;
    }
  }
`;
