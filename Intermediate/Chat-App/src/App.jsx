import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthProvider from "./context/AuthContext";

import PageLayout from "./pages/PageLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
    },
  ]);

  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
