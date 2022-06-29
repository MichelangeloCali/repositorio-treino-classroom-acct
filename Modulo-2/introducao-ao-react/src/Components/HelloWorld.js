import React from "react";
import styles from "../HelloWorld.module.css";

const HelloWorld = (props) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <>
      <div className={styles.content}>
        <h1 style={{ color: props.color }}>{props.name}</h1>
        <span style={{ color: "white" }}>{`${day}/${month + 1}/${year}`}</span>
      </div>
    </>
  );
};

export default HelloWorld;
