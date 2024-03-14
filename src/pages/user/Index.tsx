import React, { useState } from "react";
import Header from "../../components/user/Header";
import Category from "../../components/user/Category";
import MainContent from "../../components/user/MainContent";
import Footer from "../../components/shared/Footer";

const Index: React.FC = () => {
  const [dataFromCategory, setDataFromCategory] = useState<number | null>(null);

  // Categoryコンポーネントからデータを受け取るコールバック関数
  const handleCategoryData = (selectedCategoryId: number) => {
    setDataFromCategory(selectedCategoryId);
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-6xl font-[800] my-[150px]">
          最新フロントエンドツールまとめ
        </h1>
        <p className="text-center mb-[200px] text-lg leading-9">
          Web開発に携わるすべての方へ <br />
          移り変わりの早いフロントエンド開発の
          <span className="text-[#EA3800] border-b border-[#EA3800] p-1 ">
            最新技術
          </span>
          や
          <span className="text-[#EA3800] border-b border-[#EA3800] p-1">
            トレンド
          </span>
          を紹介します
        </p>
      </div>
      <Category onSelectedCategoryId={handleCategoryData} />
      <MainContent selectedCategoryId={dataFromCategory} />
      <Footer />
    </div>
  );
};

export default Index;
