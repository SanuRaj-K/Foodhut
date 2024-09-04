import React from "react";
import HeaderOne from "../../components/header/HeaderOne";
import HeaderTwo from "../../components/header/HeaderTwo";
import HeaderMain from "../../components/header/HeaderMain";
import SpotLight from "../../components/spotlilght";
import Category from "../../components/category";

function MainPage() {
  return (
    <main className=" font-inter">
      <div className=" bg-white">
        <div className=" px-5 ">
          <HeaderOne />
          <div className=" my-5">
            <HeaderTwo />
          </div>
          <HeaderMain />
        </div>
        <SpotLight />
        <div className=" mx-14">
        <Category />
        </div>
        
      </div>
    </main>
  );
}

export default MainPage;
