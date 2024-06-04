import "./App.css";
import ThemeProvider from "./Theme/ThemeProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
