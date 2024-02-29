import React from "react";
import Header from "../../components/user/Header";
import Category from "../../components/user/Category";
import ItemList from "../../components/user/ItemList";
import Footer from "../../components/shared/Footer";
import { useLocation } from "react-router-dom";

const AllItems = () => {
  // パラメータからカテゴリーIDを取得
  const searchParams = new URLSearchParams(useLocation().search);
  const id = searchParams.get("id");

  // TODO apiでデータ取得→ItemListに渡す

  return (
    <div>
      <Header />
      <div className="my-10">
        <h1 className="text-3xl font-bold">セクションid: {id}</h1>
        <Category />
      </div>
      <Footer />
    </div>
  );
};

export default AllItems;
