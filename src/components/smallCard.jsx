import classes from "./smallCard.module.css";

const SmallCard = ({ ele }) => {
  return (
    <div className={classes.card}>
      <img src={ele.bkgImg} alt="" />
      <div className={classes.decoLeft}> &#183;</div>
      <div className={classes.decoRight}>&#183;</div>
      <div className={classes.backdrop} />
      <p>{ele.title}</p>
    </div>
  );
};
export default SmallCard;
