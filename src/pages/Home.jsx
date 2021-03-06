import React from "react";
import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <Products/>
      {/* <Newsletter/> */}
      <Footer/>
    </div>
  );
};

export default Home;
