import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../data";
import logo from "../images/team-logo/Logo-White.png";

const Header = () => {
  const location = useLocation();
  const [isOpened, setIsOpened] = useState(false);
  const [navLinks, setNavLinks] = useState(links);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 767) {
        setIsOpened(false);
      }
    });
    return window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setNavLinks((prev) => [...prev]);
    setIsOpened(false);
  }, [location]);

  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo-Egi" className="logo" />
        <nav>
          <i
            id="nav-icon"
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpened((a) => !a)}
            className="fa-solid fa-bars"></i>
          <ul className={isOpened ? "menu-open" : ""} id="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  className={link.path === location.pathname ? "active" : ""}
                  to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
