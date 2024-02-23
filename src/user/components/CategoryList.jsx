import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY } from "../../constants/index"

const Category = () => {
  return (
    <div className="my-[100px]">
      <Link to="/category" className="flex justify-between">
        {CATEGORY.map((categoryName, index) => (
          <div key={index}>
            <img />
            <h2 className="text-2xl shadow-lg rounded-xl p-3 bg-white w-64 text-center">
              {categoryName}
            </h2>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Category;
