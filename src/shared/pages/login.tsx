import React from "react";
import Header from "../../user/components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="text-center">
      <Header />
      <h4 className="text-3xl my-10">ログイン</h4>
      <form className="my-20">
        <span>ユーザID</span>
        <input className="rounded-xl h-10 w-60 mx-5" />
        <span>パスワード</span>
        <input className="rounded-xl h-10 w-60 mx-5" />
      </form>
      <div className="my-10 mx-auto text-lg rounded-full px-5 py-1 text-center bg-[#1C1C1C] text-white w-fit">
        <span>ログイン</span>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
