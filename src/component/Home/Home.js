import React from "react";
import classes from "./Home.module.css";
import List from "../List/List";
import Filter from "../Filter/Filter";

function Home(props) {
  return (
    <div className={classes.Home}>
      <Filter />
      <List />
    </div>
  );
}

export default Home;
