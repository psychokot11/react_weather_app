import React from "react";

export default function CurrentDate() {
  let date = new Date();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = day[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${date.getHours()}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${date.getMinutes()}`;
  }

  let time = " " + `${hour}:${minutes}`;
  return (
    <div>
      {today} {time}
    </div>
  );
}
