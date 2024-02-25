import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Category = () => {
    // パラメータからカテゴリーIDを取得Q
    const { categoryId } = useParams();

  return (
    <div>
      <Header />
      <div>カテゴリー一覧</div>
    </div>
  );
};

export default Category;
