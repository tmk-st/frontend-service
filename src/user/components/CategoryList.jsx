import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const categoryNameList = ["言語", "フレームワーク", "UIライブラリ", "その他"];

  return (
    <div className="my-[100px]">
      <Link to="/category" className="flex justify-between">
        {categoryNameList.map((categoryName, index) => (
          <div>
            <img />
            <h2 key={index} className="text-2xl shadow-lg rounded-xl p-3 bg-white w-64 text-center">
              {categoryName}
            </h2>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Category;
