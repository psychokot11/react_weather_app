import React from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";

export default function Default() {
  return (
    <div>
      <h1 className="city">Oslo</h1>
      <h3 className="date">
        <CurrentDate />
      </h3>
      <div>conditions</div>
    </div>
  );
}
