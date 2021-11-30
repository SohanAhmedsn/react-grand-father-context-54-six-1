import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = () => {
  return (
    <div>
      <h2>Father</h2>
      <div style={{display:'flex'}}>
        <MySelf></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Father;
