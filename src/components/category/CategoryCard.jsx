import React from "react";
import { categoryData } from "../../data/categoryData";

function CategoryCard() {
  return (
    <div className="  py-10 md:flex grid grid-cols-2 gap-7  md:justify-between items-center">
      {categoryData?.map((item, index) => (
        <div
          key={index}
          className="  flex cursor-pointer  hover:shadow-lg items-center content-center hover:bg-white rounded-lg bg-[#dad6d6] w-[150px] h-[180px]"
        >
          <div className="   mx-auto flex content-center flex-col items-center">
            <img width={80} src={item.icon} alt={item.title} />
            <span className="  mt-3 capitalize text-[20px]">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
