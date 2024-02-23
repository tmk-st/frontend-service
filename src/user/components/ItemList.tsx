import React from "react";
import { Link } from "react-router-dom";
import { HEAD } from "../../constants/index"

const ItemList = () => {
  return (
    <div>
      {HEAD.map((head, index) => (
        <Link to="/detail" key={index}>
          <div className="my-[100px]">
            <h2 className="text-3xl  mb-5">{head}</h2>
            <ul>
              <li className="shadow-lg bg-white rounded-xl p-3">アイテム</li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
