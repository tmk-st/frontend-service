import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HEAD } from "../../constants/index"

const ItemList = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      const getItems = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/items');
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error('エラー:', error);
        }
      };
  
      getItems();
    }, []);
  
    const renderItems = () => {
      console.log(items)
      return (
        <ul className="flex justify-between">
          {items.map(item => (
            <li key={item.id} className="shadow-lg bg-white w-[13rem] rounded-xl p-3">{item.name}</li>
          ))}
        </ul>
      );
    };
  
  
  return (
    <div>
      {HEAD.map((head, index) => (
        <Link to="/detail" key={index}>
          <div className="my-[100px]">
            <h2 className="text-3xl mb-5">{head}</h2>
            {renderItems()}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
