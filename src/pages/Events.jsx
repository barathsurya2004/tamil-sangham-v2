import { useState } from "react";
import Footer from "../components/Footer";
import LargeCard from "../components/LargeCard";
import Header from "../components/header";
import classes from "./Events.module.css";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Mycollections = [
    {
      title: "VASAGAR VATTAM",
      session: "Weekly Session",
      backImgUrl: "/assets/2.jpg",
      quote:
        "நம் மாணவர்கர்ள் குழுவாக கூடி, ஓர் படைப்பை (கதை / கவிதை /நாடகம் / கட்டுரை ) வாசித்துத் , பின் அதை ப்பற்றி உரையாடும் நிகழ்வு.",
      link: "vasagar-vattam",
    },
    {
      title: "Tamil New Year",
      session: "Annual Event",
      quote:
        "ஒவ்வொரு ஆண்டும், தமிழ் புத்தாண்டைக் குறிக்கும் வகையில், கலாச்சார நிகழ்ச்சிகள், பாரம்பரிய உணவுகள் மற்றும் மகிழ்ச்சியான விழாக்களுக்காக IITH சமூகத்தை ஒன்றிணைக்கும் ஒரு பெரிய கொண்டாட்டத்தை நடத்துகிறோம்.",
      backImgUrl: "/assets/2.jpg",
    },
    {
      title: "Pongal Celebration",
      session: "Annual Event",
      quote:
        "தமிழ் புத்தாண்டுக்கு கூடுதலாக, பாரம்பரிய பொங்கல் உணவுகள், கலாச்சார நிகழ்ச்சிகள் மற்றும் பண்டிகை அலங்காரங்களுடன் முழுமையான அறுவடைத் திருவிழாவைக் கொண்டாடும் பொங்கல் நிகழ்வையும் நாங்கள் ஏற்பாடு செய்கிறோம்.",
      backImgUrl: "/assets/2.jpg",
    },
    {
      title: "Fresher Meet",
      session: "Annual Event",
      quote:
        "ஒவ்வொரு கல்வியாண்டின் தொடக்கத்திலும், ஐஐடிஎச்-க்கு புதிய மாணவர்களை வரவேற்கவும், வளாகத்தில் உள்ள துடிப்பான தமிழ் சமூகத்திற்கு அவர்களை அறிமுகப்படுத்தவும், அவர்கள் வீட்டில் இருப்பதை உணரவும் ஒரு சிறப்பு நிகழ்வை ஏற்பாடு செய்கிறோம்.",
      backImgUrl: "/assets/2.jpg",
    },
    {
      title: "Volley Ball Tournament ",
      session: "Annual Event",
      quote:
        "தமிழ் புத்தாண்டுக்கு முன், தமிழ் சமூகத்தில் விளையாட்டு உணர்வை ஊக்குவிக்கும் வகையில் உற்சாகமான கைப்பந்து போட்டியை நடத்துகிறோம். இந்த நிகழ்வு பங்கேற்பாளர்களிடையே நட்புறவை வளர்ப்பது மட்டுமல்லாமல் ஆரோக்கியமான வாழ்க்கை முறை மற்றும் குழுப்பணியையும் ஊக்குவிக்கிறது ",
      backImgUrl: "/assets/2.jpg",
    },
  ];
  const nextHandler = () => {
    if (currentIndex === Mycollections.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(Mycollections.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
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
        <h1>Events</h1>
        <div className={classes.images}>
          <LargeCard ele={Mycollections[currentIndex]} />
          <div className={classes.controlButtons}>
            <img onClick={nextHandler} src="/assets/next.svg" alt="" />
            <img onClick={prevHandler} src="/assets/prev.svg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Events;
