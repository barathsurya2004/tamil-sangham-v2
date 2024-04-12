import classes from "./HomePage.module.css";
import Header from "../components/header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.backGrad} />
        <img src="/assets/Background design.svg" alt="" />
        <Hero />
        <AboutUs />
      </div>
    </>
  );
};

export default HomePage;
