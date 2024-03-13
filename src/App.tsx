import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserIndex from "./pages/user/Index";
import About from "./pages/user/About";
import Detail from "./pages/user/Detail";
import AdminIndex from "./pages/admin/Index";

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          {/* ユーザー画面 */}
          <Route path="/" element={<UserIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />

          {/* 管理画面 */}
          <Route path="/admin" element={<AdminIndex />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

export default App;
