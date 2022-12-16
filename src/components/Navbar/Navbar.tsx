import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <Link to="/products/1">Woman</Link>
          </div>
          <div className="item">
            <Link to="/products/1">Man</Link>
          </div>
          <div className="item">
            <Link to="/products/1">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">R-STORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/">Home</Link>
          </div>
          <div className="item">
            <Link to="/about">About</Link>
          </div>
          <div className="item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="item">
            <Link to="/stores">Stores</Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="shoppingCart">
              <ShoppingCartOutlinedIcon />
              <span className="itemCounter">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
