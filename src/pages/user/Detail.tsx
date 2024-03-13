import React, { useEffect, useState } from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/shared/Footer";
import { useLocation } from "react-router-dom";

const Detail = () => {
  // パラメータからidを取得
  const searchParams = new URLSearchParams(useLocation().search);
  const id = searchParams.get("id");

  const [items, setItems] = useState<Item | null>(null);

  interface Item {
    id: number;
    name: string;
    description: string;
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
          <div className="flex">
            {/* FIXME 仮画像 */}
            <img src="/img/laptop_2_line.png" className="w-[10rem]" />
            <div className="items-center ml-5">
              <h2 className="text-3xl my-5 flex font-bold">{items.name}</h2>
              <div className="bg-[#1C1C1C] rounded-full w-fit px-5 py-2">
                <a
                  href={items.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <span className="text-[#f4f4f4] text-sm">公式サイトへ</span>
                  <img src="/img/external_link_line.svg" className="w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 my-5 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-5 pl-3 border-l-[8px] border-[#EA3800]">
              概要
            </h3>
            <span>{items.description}</span>
            <h3 className="text-2xl font-bold mt-20 mb-5 pl-3 border-l-[8px] border-[#EA3800]">
              詳細情報
            </h3>
            <span>{items.detail}</span>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Detail;
