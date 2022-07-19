import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className={tailwind.navbar}>
      <h1 className={tailwind.title}>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Search",
  icon: "fa fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

const tailwind = {
  navbar:
    "w-full py-5 flex items-center justify-center bg-black border border-gray-800",
  title: "text-3xl text-gray-100",
};

export default Navbar;
