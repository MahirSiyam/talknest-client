import React from "react";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Blog2 from "../Components/Blog2";
import Stats from "../Components/Stats";
import LanguageCategories from "../Components/LanguageCategories";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <div className="mb-10">
        <Banner></Banner>
      </div>

      <div className="w-9/12 mx-auto flex justify-center mb-10">
        <Stats></Stats>
      </div>

      <div className="mb-10">
        <LanguageCategories></LanguageCategories>
      </div>

      <div className="max-w-7xl mx-auto mb-15">
        <Blog2></Blog2>
      </div>

      <div className="max-w-7xl mx-auto mb-15">
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Home;
