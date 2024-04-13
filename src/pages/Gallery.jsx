import Footer from "../components/Footer";
import Header from "../components/header";
import classes from "./Gallery.module.css";
import SmallCard from "../components/smallCard.jsx";
const Gallery = () => {
  const Mycollections = [
    {
      title: "Tamil Sangham ",
      bkgImg: "/assets/2.jpg",
      available: false,
      link: null,
    },
    {
      title: "Tamil New Year '22",
      bkgImg: "/assets/tamil-new-year-22.jpg",
      available: true,
      link: null,
    },
    {
      title: "TNY Creatives '23",
      bkgImg: "/assets/TNY23Creatives.jpeg",
      available: false,
      link: null,
    },
    {
      title: "TNY Volley ball Tournament'23",
      bkgImg: "/assets/volley.jpg",
      available: true,
      link: null,
    },
    {
      title: "Tamil New Year'23",
      bkgImg: "/assets/TNY23'.png",
      available: false,
      link: null,
    },
    {
      title: "Freshers Meet '23",
      bkgImg: "/assets/freshers' meet 23.png",
      available: false,
      link: null,
    },
    {
      title: "Pongal celebration '24",
      bkgImg: "/assets/pongal24.jpeg",
      available: false,
      link: null,
    },
  ];
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
        <div className={classes.gallery}>
          <h1>Gallery</h1>
          <div className={classes.images}>
            {Mycollections.map((ele) => (
              <SmallCard ele={ele} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Gallery;
