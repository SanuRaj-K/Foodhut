import React from "react";

function HeaderOne() {
  return (
    <div className=" flex justify-between   font-[500]">
      <div className=" cursor-pointer">
        <span>Facebook</span>
        <span className=" mx-4">Instagram</span>
        <span>Twitter</span>
      </div>
      <div>
        <span>Open Hours Mon-Fri: 8.00am-6.00pm</span>
      </div>
    </div>
  );
}

export default HeaderOne;
