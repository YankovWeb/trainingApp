import React from "react";
import MyParagraph from "./MyParagraph";
import {memo} from "react";
const DemoOutPut = (props) => {
  return <MyParagraph>{props.show ? "this is new!" : ""}</MyParagraph>;
};

export default memo(DemoOutPut);
