import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/categories");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("エラー:", error);
      }
    };

    getCategory();
  }, []);

  // カテゴリーがクリックされたときの処理
  const handleCategoryClick = (index: number | null) => {
    setSelectedCategory(index);
  };

  // カテゴリーのスタイルを取得する
  const getCategoryStyle = (index: number | null) => {
    if (selectedCategory === null && index === null) {
      return "bg-[#1C1C1C] text-white";
    } else if (selectedCategory === index) {
      return "bg-[#1C1C1C] text-white";
    } else {
      return "border-2 border-solid border-[#1c1c1c]";
    }
  };

  return (
    <div className="my-[100px]">
      <ul className="flex">
        <li
          className={`${getCategoryStyle(
            null
          )} text-xl mr-6 rounded-full py-3 w-[11rem] flex cursor-pointer`}
          onClick={() => handleCategoryClick(null)}
        >
          <h3 className="my-0 mx-auto">すべて</h3>
        </li>
        {category.map((item, index) => (
          <li
            key={index}
            className={`${getCategoryStyle(
              index
            )} text-xl mr-6 rounded-full py-3 w-[11rem] flex cursor-pointer`}
            onClick={() => handleCategoryClick(index)}
          >
            <h3 className="my-0 mx-auto">{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
