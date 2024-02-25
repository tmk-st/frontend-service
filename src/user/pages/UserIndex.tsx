import React from "react";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import ItemList from "../components/ItemList";
import Footer from "../../shared/components/Footer";

const UserIndex = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-6xl font-[800] my-[150px]">
          最新フロントエンドツールまとめ
        </h1>
        <p className="text-center mb-[200px] text-lg leading-9">
          Web開発に携わるすべての方へ <br />
          移り変わりの速いフロントエンド技術の
          <span className="text-[#EA3800] border-b border-[#EA3800] p-1 ">最新技術</span>や
          <span className="text-[#EA3800] border-b border-[#EA3800] p-1">トレンド</span>を紹介します
        </p>
      </div>
      <CategoryList />
      <ItemList />
      <Footer />
    </div>
  );
};

export default UserIndex;
