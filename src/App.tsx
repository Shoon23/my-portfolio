import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "project/:projectId",
          element: <SingleProject />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
