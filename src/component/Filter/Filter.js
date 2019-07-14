import React from "react";
import { connect } from "react-redux";

import classes from "./Filter.module.css";

function Filter(props) {
  let changeFilter = event => {
    let type = event.target.getAttribute("data-type");
    console.log(type);
    props.onFilter(type);
  };

  return (
    <div className={classes.Filter}>
      <button onClick={changeFilter} data-type="all">
        All
      </button>
      <button onClick={changeFilter} data-type="new">
        New
      </button>
      <button onClick={changeFilter} data-type="old">
        Old
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onFilter: filter => dispatch({ type: "CHANGE_FILTER", filter })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);
