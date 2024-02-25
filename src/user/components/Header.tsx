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
      <Link to="/mypage">
        <img src="/img/user_icon.svg" alt="マイページ" />
      </Link>
    </div>
  );
};

export default Header;
