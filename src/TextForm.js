import React, { useState } from 'react';

const YourComponent = (props) => {
  const [text, setText] = useState("");
  const [selectedFont, setSelectedFont] = useState("selectedFont");


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyClick = () => {
    let newText = document.getElementById("FormControlText");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(""));
  };

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  let mystyle = {
    color: "white"
  };

  return (
    <>
      <div className="container mb-3">
        <label htmlFor="FormControlText" className="form-label">
          <h1 className="heading">{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="FormControlText"
          value={text}
          onChange={handleOnChange}
          rows="9"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            fontFamily: selectedFont, // Font family based on selectedFont state
            '::placeholder': { color: 'white' }
          }}
          placeholder="Enter Text Here"
        ></textarea>
      </div>

      <button className="btn  mx-2" style={mystyle} onClick={handleUpClick}>
        Uppercase
      </button>
      <button className="btn  mx-3" style={mystyle} onClick={handleLoClick}>
        Lowercase
      </button>
      <button className="btn mx-3" style={mystyle} onClick={handleClearClick}>
        ClearText
      </button>
      <button className="btn  mx-3" style={mystyle} onClick={handleCopyClick}>
        CopyText
      </button>
      <button className="btn  mx-3" style={mystyle} onClick={handleExtraSpace}>
        ExtraSpace
      </button>
      <button className="btn   mx-3" id="font-button" style={mystyle}>
        SelectFont
      </button>

      <select  className="btn" style={mystyle} id="font-selector" value={selectedFont} onChange={handleFontChange}>
      <option value="Default">Default</option>
      <option value="Arial">Arial</option>
        <option value="Oxygen">Oxygen</option>
        <option value="Ubuntu">Ubuntu</option>
        <option value="Verdana">Verdana</option>
        <option value="Fira Sans">Fira Sans</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Droid Sans">Droid Sans</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
        <option value=" Brush Script"> Brush Script</option>
        <option value="Impact">Impact</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
    </>
  );
};

export default YourComponent;