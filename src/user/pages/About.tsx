import React from "react";
import Header from "../components/Header";
import Footer from "../../shared/components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="my-20">
        <h1 className="text-4xl text-center font-bold mb-14">このサイトについて</h1>
        <p className="px-[10rem] leading-10 mb-20">
          「最新フロントエンドツールまとめ」は、フロントエンド開発の最新技術やトレンドのライブラリ、AIツールなどを紹介するサイトです。
          <br />
          移り変わりが早いと言われるフロントエンドの情報をリアルタイムで更新します。
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
