import Card from "../components/Card";
import React from "react";

const Menu = () => {
  return (
    <div className="bg-[#f2f3f8]">
      <h1 className="text-center font-bold text-5xl pt-10">Our Menu</h1>
      <div className="flex-row flex gap-20 p-20 ">
        <Card
          src={
            "https://livedemo00.template-help.com/wt_61177_v1/images/menu-modern-2-310x260.png"
          }
        />
        <Card
          src={
            "https://livedemo00.template-help.com/wt_61177_v1/images/menu-modern-6-310x260.png"
          }
        />
        <Card
          src={
            "https://livedemo00.template-help.com/wt_61177_v1/images/menu-modern-5-310x260.png"
          }
        />
      </div>
    </div>
  );
};

export default Menu;
