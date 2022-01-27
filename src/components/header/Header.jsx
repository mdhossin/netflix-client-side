import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import "./header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Series",
    path: "/movie",
  },
  {
    display: "Movies",
    path: "/tv",
  },
  {
    display: "Popular",
    path: "/tv",
  },
  {
    display: "My List",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();

  const active = headerNav.findIndex((e) => e.path === pathname);

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "header shrink" : "header"}>
      <div className="header__wrap container">
        <div className="header__wrap__left">
          <div className="logo">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
              />
            </Link>
          </div>
          <ul className="header__nav">
            {headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="header__wrap__right">
          <SearchIcon className="header__wrap__right__icon" />
          <span>KID</span>
          <NotificationsNoneIcon className="header__wrap__right__icon" />
          <img
            className="header__wrap__right__img"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user"
          />
          <div className="header__wrap__right__profile">
            <ArrowDropDownIcon className="header__wrap__right__profile__icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
