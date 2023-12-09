"use client";
import React, { useState } from "react";
import classes from "./CountRow.module.css";

const CountRow: React.FC = () => {
  const [count, setCount] = useState(0);

  const handlerDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handlerIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <button className={classes.buttonDecrease} onClick={handlerDecrease}>
          {"Decrease"}
        </button>
        <div className={classes.count}>{count}</div>
        <button className={classes.buttonIncrease} onClick={handlerIncrease}>
          {"Increase"}
        </button>
      </div>
    </div>
  );
};

export default CountRow;
