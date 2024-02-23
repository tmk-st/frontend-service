import React from "react";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import ItemList from "../components/ItemList";

const UserIndex = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-6xl font-[800] my-[200px]">
          最新フロントエンドツールまとめ
        </h1>
      </div>
      <CategoryList />
      <ItemList />
    </div>
  );
};

export default UserIndex;
