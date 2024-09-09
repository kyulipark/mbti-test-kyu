import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
