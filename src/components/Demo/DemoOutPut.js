import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutPut = (props) => {
  return <MyParagraph>{props.show ? "this is new!" : ""}</MyParagraph>;
};

export default DemoOutPut;
