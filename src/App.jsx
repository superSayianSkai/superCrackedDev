import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router";
import FrontendPage from "./pages/FrontendPage";
import CarrierPage from "./pages/CareerPage";
import BackendPage from "./pages/BackendPage";
import FullstackProjects from "./pages/FullstackProjects";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/frontend",
      element: <FrontendPage />,
    },
    {
      path: "/career",
      element: <CarrierPage />,
    },
    {
      path: "/backend",
      element: <BackendPage />,
    },
    {
      path: "/fullStackProjects",
      element: <FullstackProjects />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
