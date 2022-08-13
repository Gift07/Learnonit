import { useLocation, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { AnimatePresence } from "framer-motion";
import BooksDetail from "./Pages/BooksDetail";
import Cart from "./Pages/Cart";

const Animated = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="user/sign-in" element={<SignIn />} />
        <Route path="user/sign-up" element={<SignUp />} />
        <Route path="books/:id" element={<BooksDetail />} />
        <Route ath="cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Animated;
