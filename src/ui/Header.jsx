import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Pizza order</Link>
      <p>Ankit</p>
    </header>
  );
};

export default Header;
