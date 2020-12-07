import React from 'react';

const ThemeItems = (props) => {
  const { theme, handleChange } = props
  return (
    <form id="theme-form">Select Theme:&nbsp;
      <label>
        <input
          type="radio"
          value="dark"
          checked={theme === true}
          onChange={handleChange}
        />
        Dark
      </label>&nbsp;

      <label>
        <input
          type="radio"
          value="blue"
          checked={theme === false}
          onChange={handleChange}
        />
        Blue
      </label>
    </form>
  );
}

export default ThemeItems;
