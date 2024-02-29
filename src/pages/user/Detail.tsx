import React, { useEffect, useState } from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/shared/Footer";
import { useLocation, Link } from "react-router-dom";

const Detail = () => {
  // パラメータからidを取得
  const searchParams = new URLSearchParams(useLocation().search);
  const id = searchParams.get("id");

  const [items, setItems] = useState<Item | null>(null);

  interface Item {
    id: number;
    detail: string;
    link: string;
  }

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/details?id=${id}`
        );
        const data: Item[] = await response.json();
        setItems(data[0]);
      } catch (error) {
        console.log("エラー:", error);
      }
    };

    getItem();
  }, []);

  return (
    <div>
      <Header />
      {items && (
        <div className="my-10">
          <div className="bg-[#1C1C1C] rounded-full w-fit px-5 py-2">
            <Link to={items.link}>
              <span className="text-white">公式サイトへ</span>
            </Link>
          </div>
          <div className="bg-white p-10 my-5 rounded-xl shadow-lg">
            <span>{items.detail}</span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Detail;
