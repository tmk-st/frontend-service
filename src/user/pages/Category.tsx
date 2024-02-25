import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../../shared/components/Footer";
import { useParams } from "react-router-dom";

const Category = () => {
  // パラメータからカテゴリーIDを取得Q
  const { categoryId } = useParams();

  return (
    <div>
      <Header />
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">カテゴリー名</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
