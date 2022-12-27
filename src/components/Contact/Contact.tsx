import React from "react";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US!</span>
        <div className="email">
          <input
            type="email"
            name="contactEmail"
            id="contact-email"
            placeholder="Enter your email..."
          />
          <button>JOIN US</button>
        </div>
        <div className="socialIcons">
          <FacebookOutlined />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
}
