import React from "react";
import { connect } from "react-redux";

import classes from "./List.module.css";
import Item from "../Item/Item";

function List(props) {
  let items = props.menu.map(item => {
    let arr = item.expirationDate.split("-");
    let dateNow = new Date();
    let itemDate = new Date(arr[2], arr[0], arr[1]);

    if (props.filter === "all") {
      return (
        <Item
          key={item.id}
          backgroundURL={item.backgroundURL}
          name={item.name}
          expirationDate={item.expirationDate}
          description={item.description}
        />
      );
    } else if (props.filter === "new") {
      if (dateNow <= itemDate) {
        return (
          <Item
            key={item.id}
            backgroundURL={item.backgroundURL}
            name={item.name}
            expirationDate={item.expirationDate}
            description={item.description}
          />
        );
      }
    } else if (props.filter === "old") {
      if (dateNow >= itemDate) {
        return (
          <Item
            key={item.id}
            backgroundURL={item.backgroundURL}
            name={item.name}
            expirationDate={item.expirationDate}
            description={item.description}
          />
        );
      }
    }
  });

  console.log(props.filter);

  return <div className={classes.List}>{items}</div>;
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  null
)(List);
