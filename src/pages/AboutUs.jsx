import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <h1>About Us</h1>
      <div className={classes.container}>
        <div className={classes.imageHolder}>{/* <img src="" alt="" /> */}</div>
        <div className={classes.aboutContent}>
          <p>
            Welcome to the Indian Institute of Technology Hyderabad Tamizh
            Sangam. This Sangam offers a platform for those who are interested
            in Tamil language and culture and also acts as a forum for the Tamil
            community at IITH. The Sangam is the result of efforts by Tamil
            students who have been a part of IITH since its beginning in 2008.
            It took its present form on April 14, 2014, with the celebration of
            the Tamil New Year, bringing together faculty, staff, scholars, and
            students.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
