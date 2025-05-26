import React from "react";
import "./Navbar.css";
import { FaUserCircle, FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="navbar-container">
      {/* Top Navbar */}
      <div className="navbar-top">
        <div className="left-section">
          <div className="icon">
            <FaUserCircle size={24} />
          </div>
        </div>

        <div className="center-section">
          <div className="logo">SNAPPY</div>
        </div>

        <div className="right-section">
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <div className="search-icon">
              <FaSearch size={16} />
            </div>
          </div>
          <div className="icon">
            <FaShoppingBag size={22} />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="navbar-bottom">
        <ul className="bottom-menu">
          <li>
            Home <IoIosArrowDown />
          </li>
          <li>
            New Arrival <IoIosArrowDown />
          </li>
          <li>
            Women <IoIosArrowDown />
          </li>
          <li>
            Men <IoIosArrowDown />
          </li>
          <li>Kids</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar; 