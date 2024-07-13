import React from "react";
import "./ToggleSwitch.scss";

type Props = {};

const ToggleSwitch = (props: Props) => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
