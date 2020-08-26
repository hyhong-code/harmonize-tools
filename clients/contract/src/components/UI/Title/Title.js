import React from "react";
import "./Title.css";
import  Tooltip  from "../Tooltip/Tooltip";

export default function Title() {
  const titleTip = (
    <span style={{ color: "white", fontSize: '18px'}}>
      <b>How is the form created?</b> <br/>Your response to each question determines
      what goes into your customized contract. Make sure to fill out all fields
      so we can help you put everything together! you can find out the
      additional information throughout by hovering over <b>!</b> icon.{" "}
      <Tooltip /> 
    </span>
  );
  return (
    <div className="title-container">
      <h1 className="title-h1">
        Non-Disclosure and Confidentiality Agreement (NDA)
        <Tooltip placement="bottomRight" tips={titleTip} />
      </h1>
    </div>
  );
}
