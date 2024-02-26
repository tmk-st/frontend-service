import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserIndex from "./user/pages/UserIndex";
import About from "./user/pages/About";
import Detail from "./user/pages/Detail";
import AllItems from "./user/pages/AllItems";
import AdminIndex from "./admin/pages/AdminIndex";

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          {/* ユーザー画面 */}
          <Route path="/" element={<UserIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/all_items" element={<AllItems />} />

          {/* 管理画面 */}
          <Route path="/admin" element={<AdminIndex />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

export default App;
