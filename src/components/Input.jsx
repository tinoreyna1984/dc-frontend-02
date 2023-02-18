import React from "react";
import "../scss/components/_text-field.scss";

export const Input = ({
  text = "",
  helper = "",
  disabled = false,
  size = "md",
  fullWidth = false,
  style = "default-style",
  phText = "Placeholder",
  error = false,
  multiline = false,
  rows = 1,
  startIcon = false,
  endIcon = false,
}) => {
  const handleChange = (e) => {
    console.log("I got this value: ", e.target.value);
  };

  return (
    <div className="text-field-container">
      <label className={error ? "label-error" : "label"}>Label</label>
      <div
        className={`text-field ${disabled ? "disabled" : (error ? "error" : style)}
                  ${size} ${fullWidth ? "full-width" : "default-width"}`}
      >
        {startIcon && (
          <span className="side-icon material-symbols-outlined">call</span>
        )}
        {multiline && rows > 1 ? (
          <textarea
            placeholder={phText}
            rows={rows}
            disabled={disabled}
            value={text}
            onChange={handleChange}
          ></textarea>
        ) : (
          <input
            type="text"
            placeholder={phText}
            disabled={disabled}
            value={text}
            onChange={handleChange}
          />
        )}
        {endIcon && (
          <span className="side-icon material-symbols-outlined">lock</span>
        )}
      </div>
      <span className={error ? "helper-error" : "helper"}>{helper}</span>
    </div>
  );
};
