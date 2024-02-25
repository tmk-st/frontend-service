import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./shared/pages/Login";
import UserIndex from "./user/pages/UserIndex";
import Detail from "./user/pages/Detail";
import Category from "./user/pages/Category";
import Mypage from "./user/pages/Mypage";
import AdminIndex from "./admin/pages/AdminIndex";

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* ユーザー画面 */}
          <Route path="/" element={<UserIndex />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/mypage" element={<Mypage />} />

          {/* 管理画面 */}
          <Route path="/admin" element={<AdminIndex />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

export default App;
