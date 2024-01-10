import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/islets/home-islets/Navbar/Navbar";
import Hero from "../components/islets/home-islets/Hero/Hero";
import Products from "../components/islets/home-islets/Products/Products";
import TopProducts from "../components/islets/home-islets/TopProducts/TopProducts";
import Banner from "../components/islets/home-islets/Banner/Banner";
import Subscribe from "../components/islets/home-islets/Subscribe/Subscribe";
import Testimonials from "../components/islets/home-islets/Testimonials/Testimonials";
import Footer from "../components/islets/home-islets/Footer/Footer";
import Popup from "../components/islets/home-islets/Popup/Popup";

export default function Home() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}
