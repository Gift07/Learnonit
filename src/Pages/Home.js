import React from "react";
import BooksCategory from "../Components/BooksCategory";
import Footer from "../Components/Footer";
import About from "../Components/Home/About";
import Articles from "../Components/Home/Articles";
import Books from "../Components/Home/Books";
import Categories from "../Components/Home/Categories";
import Welcome from "../Components/Home/Welcome";
import InfoBar from "../Components/InfoBar";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <InfoBar />
      <Navbar />
      <Welcome />
      <About />
      <Categories />
      <Articles />
      <BooksCategory />
      <Books />
      <Footer />
    </div>
  );
};

export default Home;
