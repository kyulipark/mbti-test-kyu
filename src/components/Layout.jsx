import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


const Layout = ({ user, setUser, children }) => {
  const navigate = useNavigate();


  useEffect(() => {}, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);

    navigate("/");
  };

  return (
    <div>
      <header>
        <StyledNav>
          <Link to="/">홈</Link>
          <div>
            {user ? (
              <>
           <Link to="/test">테스트</Link>
                <Link to="/profile">프로필</Link>
                <div>{user.nickname}님</div>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </StyledNav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #8a4bc2;
  padding: 8px;
`;
