import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <aside>
        <div className="menus">
          <FaSearch />
          <h3 className="menu-item">
            <Link to="/">Search</Link>
          </h3>
        </div>
        <div className="menus">
          <MdFavorite />
          <h3 className="menu-item">
            <Link to="/wishlists">WishList</Link>
          </h3>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
