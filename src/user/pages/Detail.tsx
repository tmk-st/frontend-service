import React from "react";
import Header from "../components/Header";
import Footer from "../../shared/components/Footer";

const Detail = () => {
  return (
    <div>
      <Header />
      <div className="bg-white p-10 my-10 rounded-xl shadow-lg">
        <p>詳細</p>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
