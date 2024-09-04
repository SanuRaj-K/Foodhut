import React from "react";
import { headerTwoData } from "../../data/headerTwoData";

function HeaderTwo() {
  return (
    <div className=" flexBtw ">
      <div className=" ">
        <ul className="flexBtw ">
          {headerTwoData?.map((item, index) => (
            <li key={index} className=" ">
              <div className="flex items-center ">
                <img src={item.icon} alt="icon" />
                <div className="flex  flex-col ml-2">
                  <span className="text-[#8E8E8E] ">{item.title}</span>
                  <span className=" font-semibold text-xs">{item.text}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" uppercase cursor-pointer">Search</div>
    </div>
  );
}

export default HeaderTwo;
