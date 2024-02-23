import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="justify-between flex">
      <span className="text-center">
        最新
        <br />
        フロントエンドツール
        <br />
        まとめ
      </span>
      <ul>
        <Link to="/mypage">
          <li>マイページ</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
