import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="justify-between flex">
      <Link to="/" className="text-center">
        <span>
          最新
          <br />
          フロントエンドツール
          <br />
          まとめ
        </span>
      </Link>
      <ul className="flex">
        <li className="cursor-pointer">
          <Link to="/">トップ</Link>
        </li>
        <li className="ml-10 cursor-pointer">
          <Link to="/about">このサイトについて</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
