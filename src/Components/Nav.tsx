import React, { useState, useContext, FC } from "react";
import logo from "./../Assets/images/zaleski logo obrys.png";
import "../Assets/styles/nav.sass";
import { NavContext } from "./NavProvider";

const navLinks = [
  { navLinkId: "Home", scrollToId: "hero" },
  { navLinkId: "About", scrollToId: "about" },
  { navLinkId: "Projects", scrollToId: "projects" },
  { navLinkId: "Contact", scrollToId: "contact" },
];

interface Props {
  navLinkId: string;
  scrollToId: string;
  activeNavLinkId: string;
  setActiveLinkId: any;
}

const NavLink: FC<Props> = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <span
      id="navLinkId"
      className={
        activeNavLinkId === navLinkId ? " activeSection" : "unactiveSection"
      }
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

const Nav = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClick = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="logo" height="40" />
      </div>
      <div id="navigation">
        {navLinks.map(({ navLinkId, scrollToId }) => {
          return (
            <NavLink
              navLinkId={navLinkId}
              scrollToId={scrollToId}
              activeNavLinkId={activeNavLinkId}
              setActiveLinkId={setActiveNavLinkId}
            />
          );
        })}
      </div>
      <div id="menu">
        <button
          aria-label="menu"
          className={menuOpen ? "hamMenu hamMenuOpen" : "hamMenu hamMenuClosed"}
          onClick={() => handleOnClick()}
        >
          <div className="hamBox">
            <div className="hamBoxInner"></div>
          </div>
        </button>
        <aside
          className={menuOpen ? "sideBar sideBarOpen" : "sideBar sideBarHidden"}
        >
          <div className="menuContent">
            {navLinks.map(({ navLinkId, scrollToId }) => {
              return (
                <span onClick={() => handleOnClick()}>
                  <NavLink
                    navLinkId={navLinkId}
                    scrollToId={scrollToId}
                    activeNavLinkId={activeNavLinkId}
                    setActiveLinkId={setActiveNavLinkId}
                  />
                </span>
              );
            })}
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Nav;
