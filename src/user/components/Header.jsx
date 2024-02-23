import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/mypage">
          <li>マイページ</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
