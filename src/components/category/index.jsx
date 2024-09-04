import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div>
      <div className="  mt-12 flexBtw">
        <h2 className=" border-l-black border-l-4 pl-2 capitalize text-[36px] font-bold">
          shop by category
        </h2>
        <span className=" cursor-pointer capitalize text-[#5CA26E] underline text-[16px]">
          shop all
        </span>
      </div>
      <div>
        <CategoryCard />
      </div>
    </div>
  );
}

export default Category;
