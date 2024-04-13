import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <img src="/assets/TamilSangham Tamil.svg" alt="" />
            <hr />
            <img src="/assets/TamilSangham English.svg" alt="" />
            <p>© Copyright Tamil Sangam IIT Hyderabad. All Rights Reserved</p>
          </div>
          {/* <div className={classes.links}>
            <h1>Useful links</h1>

            <Link to={"/"}>
              <span>Home</span>
            </Link>
            <Link to={"/"}>
              <span>Events</span>
            </Link>
            <Link to={"/"}>
              <span>Team</span>
            </Link>
            <Link to={"/"}>
              <span>News</span>
            </Link>
            <Link to={"/gallery"}>
              <span>Gallery</span>
            </Link>
          </div> */}
          <div className={classes.contact}>
            <div className={classes.contactAdd}>
              <h1>Contact</h1>
              <h3>IIT Hyderabad, Sangareddy, Telangana, India - 502285</h3>
            </div>
            <div className={classes.iconLinks}>
              <a href="mailto:tamizhsangam23@gmail.com">
                <img src="/assets/Circled Envelope.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/thamizhsangam_iith/">
                <img src="/assets/Instagram Circle.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.devs}>
        <p>Designed by </p>
        <p>Developed by Barath Surya M with ❤️</p>
      </div>
    </>
  );
};

export default Footer;
