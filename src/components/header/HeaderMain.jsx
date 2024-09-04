import React from "react";
import { Cart } from "../../data/iconData";

function HeaderMain() {
  const nav = ["home", "pages", "elements", "portfolio", "blog", "shop"];
  return (
    <div>
      <div className="flexBtw">
        <div>
          <h2 className=" text-[#5CA26E] text-[56px] capitalize cursor-pointer">
            organic
          </h2>
        </div>
        <div className=" flexBtw">
          <div>
            <ul className=" flexBtw">
              {nav?.map((item, index) => (
                <li className=" mx-3" key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <span>cart</span>
            <img className=" w-8" src={Cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
