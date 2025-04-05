import React from "react";
import "./ToggleSwitch.scss";

type Props = {
  onChange?: (checked: boolean) => void;
};

const ToggleSwitch = ({ onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
