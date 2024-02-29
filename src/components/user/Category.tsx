import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);

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

  return (
    <div className="my-[100px]">
      <ul className="flex">
        <li className="text-xl mr-6 rounded-full py-3 bg-[#1C1C1C] text-white w-[11rem] flex cursor-pointer">
          <h3 className="my-0 mx-auto">すべて</h3>
        </li>
        {category.map((item, index) => (
          <li
            key={index}
            className="text-xl mr-6 rounded-full py-3 border-2 border-solid border-[#1c1c1c] w-[11rem] flex cursor-pointer"
          >
            <h3 className="my-0 mx-auto">{item.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
