import React from "react";
import { Cart } from "../../data/iconData";

function HeaderMain() {
  const nav = ["home", "pages", "elements", "portfolio", "blog", "shop"];
  return (
    <div>
      <div className="flexBtw">
        <div>
          <h2 className=" text-[#5CA26E] hover:text-green-700 text-[56px] capitalize cursor-pointer">
            organic
          </h2>
        </div>
        <div className=" flexBtw items-center">
          <div>
            <ul className=" flexBtw mr-36">
              {nav?.map((item, index) => (
                <li className=" cursor-pointer mx-3 last:mx-0 capitalize font-semibold hover:border-black hover:border-t-2" key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flexBtw items-center cursor-pointer">
            <span className=" uppercase mr-3">cart</span>
            <img className=" w-8" src={Cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
