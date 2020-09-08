import React from "react";

function BorderPiece(props) {
  const containerStyle = {
    position: "absolute",
    justifyContent: "flexstart",
    flexDirection: "row",  
    left: `${props.left - 30 / 2}px`,
    top: `${props.top - 50 / 2}px`,
    display: `${props.clicked}`,
  };

  const borderStyle = {
    borderWidth: "2px",
    borderStyle: "dashed",
    height: "50px",
    width: "30px",
    pointerEvents: "none",
    borderColor: `${props.color}`
  }


  return (
    <div className="borderContainer" style={containerStyle}>
      <div className="border" style={borderStyle}></div>
      <select
        className="charSelect"
        value={props.value}
        onChange={props.onChange}
        name="selectedChar"
      >
        {props.characters.waldo ? <option value="waldo" disabled>Waldo</option> : <option value="waldo">Waldo</option>}
        {props.characters.odlaw ? <option value="odlaw" disabled>Odlaw</option> : <option value="odlaw">Odlaw</option>}
        {props.characters.wizard ? <option value="wizard" disabled>Wizard</option> : <option value="wizard">Wizard</option>}
      </select>
    </div>
  );
}

export default BorderPiece;
