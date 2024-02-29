import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemList from "./ItemList"

const MainContent = () => {
  const section = [
    { id: 1, img_file: "sparkles_fill", title: "最新" },
    { id: 2, img_file: "trending_up_fill", title: "トレンド" },
    { id: 3, img_file: "book_6_fill", title: "定番" },
  ];

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

  // TODO ItemListにpropsで渡す
  const renderItems = () => {
    return (
      <>
        {items.map((item) => (
          <Link to={"/detail?id=" + item.id} key={item.id}>
            <li className="shadow-lg bg-white w-[18rem] h-[18rem] rounded-xl p-4 hover:shadow-inner">
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
          </Link>
        ))}
      </>
    );
  };

  return (
    <div>
      {section.map((item) => (
        <div key={item.id} className="my-[100px]">
          <div className="flex mb-5">
            <img src={"/img/" + item.img_file + ".svg"} />
            <div className="flex">
              <h2 className="text-3xl ml-3">{item.title}</h2>
              <Link to={"/all_items?id=" + item.id} className="items-center flex">
                <span className="text-gray-300 ml-5 text-sm">もっと見る</span>
              </Link>
            </div>
          </div>
          <ul className="flex justify-between">{renderItems()}</ul>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
