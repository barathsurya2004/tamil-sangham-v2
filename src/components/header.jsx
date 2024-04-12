import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { useState } from "react";
import { useWindowScrollPositions } from "../scrollPosition";

const Header = () => {
  var prevScrollpos = window.scrollY;
  const [scroll, setScroll] = useState(window.scrollY);
  const { scrollY } = useWindowScrollPositions();
  // console.log(scrollY);
  window.onscroll = function () {
    console.log(scroll);
    var currentScrollPos = window.scrollY;
    if (prevScrollpos < currentScrollPos && scrollY > 60) {
      setScroll(-60);
    } else {
      setScroll(0);
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div
      className={classes.container}
      style={{
        top: `${scroll}px`,
      }}
    >
      <Link to={"/"}>
        <div className={classes.logo}>
          <img
            className={classes.logoImage}
            src="/assets/TamilSangham English.svg"
            alt="logo"
          />
        </div>
      </Link>
      <nav className={classes.links}>
        <ul>
          <li>Home</li>|<li>News</li> |<li>Events</li> |<li>Gallery</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
