import classes from "./HomePage.module.css";
import Header from "../components/header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.backGrad} />
        <img
          className={classes.backdesign}
          src="/assets/Background design.svg"
          alt=""
        />
        <Hero />
        <AboutUs />
        <div
          className={classes.banner}
          onClick={() => {
            navigate("/vasagar-vattam");
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <img src="/assets/vasagar-vattam.svg" alt="" />
            <h1>Vasagar Vattam</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
