import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/categories');
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('エラー:', error);
      }
    };

    getCategory();
  }, []);

  const renderCategory = () => {
    console.log(category)
    return (
      <ul className="flex justify-between">
        {category.map(item => (
          <li key={item.id}className="text-2xl shadow-lg rounded-xl p-3 bg-white w-[14rem] text-center">{item.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="my-[100px]">
      <Link to="/category">
      <div>{renderCategory()}</div>
      </Link>
    </div>
  );
};

export default Category;
