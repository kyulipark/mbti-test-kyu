import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Layout from "../components/Layout";
import { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Layout user={user} setUser={setUser}></Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} setUser={setUser} />
            </ProtectedRoute>
          }
        />

        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
