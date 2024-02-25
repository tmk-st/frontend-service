import React from "react";

const Bookmark = () => {
  return (
    <div>
      <div className="flex my-10">
        <img src="/img/bookmark_fill.svg" />
        <h1 className="text-4xl font-bold">ブックマーク</h1>
      </div>
      <div className="my-10 text-lg rounded-full px-2 py-1 text-center bg-[#1C1C1C] text-white w-[6rem]">
        <h3>すべて</h3>
      </div>
    </div>
  );
};

export default Bookmark;
