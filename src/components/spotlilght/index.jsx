import React from "react";
import { Landing1, Landing2 } from "../../data/imageData";

function SpotLight() {
  return (
    <div className=" mt-7 flex flex-col bg-spotlight h-screen bg-cover bg-no-repeat w-full">
      <div className=" h-full px-10 flex  justify-between items-center mx-auto">
        <div className=" pr-9 relative  ">
          <img src={Landing1} alt="pic" />
          <div className=" flex flex-col pl-6 absolute top-0">
            <span className="  italic capitalize text-[#5CA26E] text-[46px]">
              super
            </span>
            <span className=" uppercase text-black text-[66px]  font-bold">
              saving
            </span>
            <div className=" flex items-center">
              <p className=" w-[100px] h-1 mr-3 bg-[#5CA26E]"></p>

              <span className=" uppercase text-black text-[56px] font-semibold">
                sale{" "}
              </span>
            </div>
            <div>
              <p className=" text-medium my-3 max-w-[400px] text-[#8E8E8E]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                iusto nemo fugit molestias ex error recusandae quod.
              </p>
            </div>
            <div>
              <button className=" hover:text-black  hover:rounded-lg  bg-[#5CA26E] text-white px-7 text-center py-2 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className=" ">
          {" "}
          <img src={Landing2} alt="" />{" "}
        </div>
      </div>
    </div>
  );
}

export default SpotLight;
