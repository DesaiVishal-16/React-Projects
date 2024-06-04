import { useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

export const ContextTheme = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  }
  return (
    <>
      <ContextTheme.Provider value={{ theme, toggleTheme }}>
        {children}
      </ContextTheme.Provider>
    </>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
