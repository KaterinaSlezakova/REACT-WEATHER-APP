import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
    let day= days[props.day];
    let hours=props.hours;
    if (hours<10){
        hours=`0${hours}`
    }
    let minutes=props.minutes;
    if (minutes<10){
        minutes=`0${minutes}`;
    }
  return (
    <div>
      Last updated on {day} {hours}:{minutes}
    </div>
  );
}
