import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import InfoBar from "../Components/InfoBar";
import Footer from "../Components/Footer";
import BookDetail from "../Components/Books/BookDetail";

import Details from "../Components/Books/Details";
import Related from "../Components/Books/Related";

const BooksDetail = () => {
  return (
    <motion.div className="w-screen h-screen font-poppins overflow-x-hidden">
      <InfoBar />
      <Navbar />
      <BookDetail />
      <Details />
      <Related />
      <Footer />
    </motion.div>
  );
};

export default BooksDetail;
