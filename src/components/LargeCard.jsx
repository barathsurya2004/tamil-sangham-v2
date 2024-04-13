import { useState } from "react";
import classes from "./LargeCard.module.css";

const LargeCard = ({ ele }) => {
  const [mouseIn, setMouseIn] = useState(false);
  return (
    <div
      className={classes.card}
      onMouseEnter={() => {
        setMouseIn(true);
      }}
      onMouseLeave={() => {
        setMouseIn(false);
      }}
    >
      <img src={ele.backImgUrl} alt="" />
      <div className={classes.decoLeft}> &#183;</div>
      <div className={classes.decoRight}>&#183;</div>
      <div className={classes.backdrop} />
      <div className={classes.content}>
        <p
          style={
            !mouseIn
              ? {
                  position: "absolute",
                  bottom: "0",
                  left: "20px",
                }
              : {}
          }
        >
          {ele.title}
        </p>

        <p
          style={{
            transition: "all 0ms linear",
            visibility: mouseIn ? "visible" : "hidden",
          }}
        >
          {ele.quote}
        </p>
      </div>
    </div>
  );
};
export default LargeCard;
