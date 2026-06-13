import React from "react";

const Navbar = ({ theme, setTheme }) => {
  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <p>{theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
