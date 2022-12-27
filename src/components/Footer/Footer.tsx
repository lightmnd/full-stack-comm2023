import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerTop">
        <div className="parags">
          <h1>Categories</h1>
          <ul>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/man">Man</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>
          </ul>
        </div>
        <div className="parags">
          <h1>Links</h1>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/compare">Compare</Link>
          </li>
          <li>
            <Link to="/cookies">Cookies</Link>
          </li>
        </div>
        <div className="parags">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque
            illum incidunt facere placeat molestiae quidem velit, suscipit
            eligendi iure asperiores aliquam laudantium ullam ipsa officia.
            Cupiditate, qui molestias. Asperiores.
          </span>
        </div>
        <div className="parags">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptatem, perspiciatis dolorum accusantium alias sed
            quos aliquid quo amet numquam inventore, earum culpa aliquam aperiam
            ea, nihil aspernatur. Deleniti, fuga?
          </span>
        </div>
      </div>
      <div className="footerBottom">
        <div className="paragsBottom">
          <div className="paragsBottomLeft">
            <h3 className="logo">R-STORE</h3>
            <span>Copyright &copy; 2023 - All rights reserved.</span>
          </div>
          <div className="paragsBottomLeft">
            <img src="/img/payment.png" alt="Payment" />
          </div>
        </div>
      </div>
    </div>
  );
}
