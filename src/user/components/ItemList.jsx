import React from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
  const HeaderName = ["最新", "トレンド"];

  return (
    <div>
      {HeaderName.map((head, index) => (
        <Link to="/detail">
          <div key={index} className="my-[100px]">
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
