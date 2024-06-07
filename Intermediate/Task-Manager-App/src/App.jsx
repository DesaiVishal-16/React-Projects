import "./App.css";
import ThemeProvider from "./Theme/ThemeProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import AllTasks from "./pages/AllTasks";
import Important from "./pages/Important";
import Completed from "./pages/Completed";
import DoItNow from "./pages/DoItNow";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,

      children: [
        {
          path: "/",
          element: <AllTasks />,
        },
        {
          path: "/important",
          element: <Important />,
        },
        {
          path: "/completed",
          element: <Completed />,
        },
        {
          path: "/do-it-now",
          element: <DoItNow />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
