import React from "react";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.Item}>
      <div className={classes.item_img}>
        <img src={props.backgroundURL} alt="item img" />
      </div>
      <div className={classes.item_info}>
        <div className={classes.item_header}>
          <h2>{props.name}</h2>
          <small>{props.expirationDate}</small>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Item;
