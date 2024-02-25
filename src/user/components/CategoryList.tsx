import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const renderCategory = () => {
    return (
      <>
        {category.map((item) => (
          <Link to={"/category?" + item.id} key={item.id}>
            <li className="text-2xl mr-6 rounded-full py-4 bg-[#1C1C1C] text-white w-[15rem] flex">
              {/* <img src={"/img/" + item.img_file_name} alt={item.name} /> */}
              <h3 className="my-0 mx-auto">{item.name}</h3>
            </li>
          </Link>
        ))}
      </>
    );
  };

  return (
    <div className="my-[100px]">
      <ul className="flex">{renderCategory()}</ul>
    </div>
  );
};

export default Category;
