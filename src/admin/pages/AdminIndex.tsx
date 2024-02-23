import React from "react";
import User from "../components/User";
import ItemList from "../components/ItemList";

const AdminIndex = () => {
  return (
    <div>
      <p>管理画面</p>
      <User />
      <ItemList />
    </div>
  );
};

export default AdminIndex;
