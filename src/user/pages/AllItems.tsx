import React from "react";
import Header from "../components/Header";
import Footer from "../../shared/components/Footer";
import { useLocation } from "react-router-dom";

const Category = () => {
  // パラメータからカテゴリーIDを取得Q
  const searchParams = new URLSearchParams(useLocation().search);
  const id = searchParams.get('id');
  return (
    <div>
      <Header />
      <div className="my-10">
        <h1 className="text-3xl font-bold">セクションid: {id}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
