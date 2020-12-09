import React from "react";

const ThemeItems = (props) => {
  const { theme, handleChange } = props
  return (
    <form id="theme-form">Select Theme:&nbsp;
      <label>
        <input
          type="radio"
          value="dark"
          name="theme"
          checked={theme === true}
          onChange={handleChange}
        />
        Dark
      </label>&nbsp;&nbsp;

      <label>
        <input
          type="radio"
          value="light"
          name="theme"
          checked={theme === false}
          onChange={handleChange}
        />
        Light
      </label>
    </form>
  );
}

export default ThemeItems;
