import React from "react";
import Home from "./pages/home";
import WishList from "./pages/wishlist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlists" element={<WishList />} />
    </Routes>
  );
}

export default App;
