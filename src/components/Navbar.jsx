import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/testimonials">Testimonials</CustomLink>
        <CustomLink to="/pictures">Pictures</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const location = useLocation();

  return (
    <li className={location.pathname === to ? "active" : ""}>
      <Link to={to} className="hover-container">
        {children}
        <div className="mask"></div>
      </Link>
    </li>
  );
}
