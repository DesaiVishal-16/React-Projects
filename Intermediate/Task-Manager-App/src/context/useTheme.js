import { useContext } from "react";
import { ContextTheme } from "../Theme/ThemeProvider";

const useTheme = () => {
  const context = useContext(ContextTheme);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
