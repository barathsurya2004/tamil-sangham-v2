import Footer from "../components/Footer";
import Header from "../components/header";
import classes from "./VasagarVattam.module.css";

const VasagarVattam = () => {
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
        <div className={classes.hero}>
          <img src="/assets/vasagar-vattam.svg" alt="" />
          <div className={classes.content}>
            <h1>Vasagar Vattam</h1>
            <p>
              வாசித்தல் என்பது அனுபவத்தை உள்வாங்குவதேயாகும். வாசிக்கும்
              பழக்கமுடையவர்கள் வாசித்தலின் மூலம், உலகை விசாலமாக பார்க்க
              தொடங்குகிறார்கள். நாம் வாழதொரு வாழ்வை, நகர்தலை,பூரிப்பை, தொடுதலை,
              தீண்டுதலையென வாசிப்பதன் மூலம் அடைகிறார்கள். வாழ்க்கை பயணத்தில்,
              வாழமுடியாத தருணங்களை, வாசித்தல் வழங்குகிறது. எல்லாவற்றுக்கும்
              மேலாக, வாசித்தலின் வழியே மனித மனங்களில் நம்மால் குடியேர முடியும்.
              மனித இயல்புகளை ஒருசேர உணர முடியும். பிறரின் அனுபவம் வாயிலாக, உலகை
              அடையும் எளிய வழி வாசித்தல் ஒன்றே!
            </p>
          </div>
        </div>
        <div className={classes.gallery}>
          <h1>Gallery</h1>
          <div className={classes.slider}>
            <div className={classes.images}>
              <div className={classes.imageCard}>
                <img src="/assets/2.jpg" alt="" />
              </div>
              <div className={classes.imageCard}>
                <img src="/assets/2.jpg" alt="" />
              </div>
              <div className={classes.imageCard}>
                <img src="/assets/2.jpg" alt="" />
              </div>
            </div>
            <div className={classes.controlButtons}>
              <img src="/assets/next.svg" alt="" />
              <img src="/assets/prev.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.faq}>
          <h1>FAQs</h1>
          <div className={classes.questions}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default VasagarVattam;
