import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [content, setNewContent] = useState("");
  const [result, setNewResult] = useState("");

  function handleInputValue(event) {
    const value = event.target.value;
    setNewContent(value);

    const regex = /([^0-1]).*/;
    const validation = regex.exec(value);
    const conv = parseInt(value, 2);

    if (value !== "" && validation === null) {
      return setNewResult(conv);
    } else if (value !== "" && validation) {
      return setNewResult("Please enter a binary number");
    } else {
      setNewContent("");
      setNewResult("");
    }
  }

  function handleOnClick() {
    setNewContent("");
    setNewResult("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Insert a binary number</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInputValue} value={content}></input>
        <button onClick={handleOnClick}>
          <span>Reset</span>
        </button>
      </div>
      <div className="result">
        <Item result={result} />
      </div>
    </div>
  );
}

export default App;
