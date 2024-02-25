import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState<Record<number, string>>({});

  useEffect(() => {
    const getItems = async () => {
      try {
        // 各アイテムを取得
        const response = await fetch("http://localhost:3001/api/items");
        const data = await response.json();
        setItems(data);

        // カテゴリの取得
        const categoryResponse = await fetch(
          "http://localhost:3001/api/categories"
        );
        const categoryData = await categoryResponse.json();

        // カテゴリ名をマッピングするオブジェクトの作成
        const categoryMap: { [key: number]: string } = {};
        categoryData.forEach((category: { id: number; name: string }) => {
          categoryMap[category.id] = category.name;
        });
        setCategories(categoryMap);
      } catch (error) {
        console.error("エラー:", error);
      }
    };

    getItems();
  }, []);

  const renderItems = () => {
    return (
      <>
        {items.map((item) => (
          <li
            key={item.id}
            className="shadow-lg bg-white w-[18rem] rounded-xl p-4 hover:shadow-inner"
          >
            {/* FIXME 仮画像 */}
            <div className="flex justify-center">
              <img src="/img/laptop_2_line.png" className="w-[5rem]" />
            </div>
            <div className="flex flex-col justify-between h-[70%]">
              <div>
                <h3 className="text-2xl font-extrabold mb-5">{item.name}</h3>
                <span>{item.description}</span>
              </div>
              <div className="flex justify-between mt-5 mb-2">
                <span className="text-sm text-gray-300 border block rounded-lg w-fit px-2 py-1">
                  {categories[item.category_id]}
                </span>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  };

  return (
    <div>
      <Link to="/detail">
        <div className="my-[100px]">
          <div className="flex mb-5">
            <img src="/img/sparkles_fill.svg" />
            <h2 className="text-3xl ml-3">最新</h2>
          </div>
          <ul className="flex justify-between">{renderItems()}</ul>
        </div>
      </Link>

      <Link to="/detail">
        <div className="my-[100px]">
          <div className="flex mb-5">
            <img src="/img/trending_up_fill.svg" />
            <h2 className="text-3xl ml-2">トレンド</h2>
          </div>
          <ul className="flex justify-between">{renderItems()}</ul>
        </div>
      </Link>

      <Link to="/detail">
        <div className="my-[100px]">
          <div className="flex mb-5">
            <img src="/img/book_6_fill.svg" />
            <h2 className="text-3xl ml-3">定番</h2>
          </div>
          <ul className="flex justify-between">{renderItems()}</ul>
        </div>
      </Link>
    </div>
  );
};

export default ItemList;
