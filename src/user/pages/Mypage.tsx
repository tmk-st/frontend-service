import React from "react";
import Header from "../components/Header";
import Bookmark from "../components/Bookmark";
import Logout from "../../shared/components/Logout";
import Footer from "../../shared/components/Footer";

const Mypage = () => {
  return (
    <div>
      <Header />
      <Bookmark />
      <Logout />
      <Footer />
    </div>
  );
};

export default Mypage;
