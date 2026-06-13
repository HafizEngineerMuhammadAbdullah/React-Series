import React from "react";
import Navbar2 from "./Navbar2";
import Button from "./Button";
import { useContext } from "react";
import ThemeContext, { ThemeDataContext } from "../context/ThemeContext";

// const Navbar = ({ theme, setTheme }) => {
//   const data = useContext(ThemeDataContext);
//   console.log(data);

//   return (
//     <div className="nav">
//       <h2>Herions</h2>
//       <Navbar2 theme={theme} setTheme={setTheme} />
//     </div>
//   );
// };

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext);
  return (
    <div className={`${theme} nav`}>
      <h2>Herions</h2>
      <Navbar2 />
      <Button />
    </div>
  );
};

export default Navbar;
