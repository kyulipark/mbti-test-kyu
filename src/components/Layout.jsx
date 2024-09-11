import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ user, setUser, children }) => {
  const navigate = useNavigate();

  // 이곳에서 로그인 하지 않은 사용자를 login 페이지로 보내줄 거에요.
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
