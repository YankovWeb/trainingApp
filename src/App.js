import React, {useState} from "react";
import Button from "./components/UI/Button/Button";
import DemoOutPut from "./components/Demo/DemoOutPut";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
