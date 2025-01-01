import { RouterProvider, createBrowserRouter } from "react-router";
import FrontendPage from "./pages/FrontendPage";
import BackendPage from "./pages/BackendPage";
import MernStack from "./pages/MernStack";
import CareerPageUpdate from "./pages/CareerPageUpdate";
import Choose from "./pages/Choose";
import Web3 from "./pages/Web3";
import BackendInto from "./pages/BackendIntro";
import { JavaScriptPage } from "./pages/JavaScriptPage";
import PythonPage from "./pages/PythonPage";
import FullstackProjectsIntro from "./pages/FullstackProjectsIntro";
import { JavaPage } from "./pages/JavaPage";
import PythonStack from "./pages/PythonStack";
import { Layout } from "./Layout.jsx/Layout";
import HomePage from "./pages/CareerIntro";
import { useState, useEffect } from "react";
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage toggleTheme={toggleTheme} />,
        },
        {
          path: "/frontend",
          element: <FrontendPage />,
        },
        {
          path: "/choose",
          element: <Choose />,
        },
        {
          path: "/backend",
          element: <BackendPage />,
        },
        {
          path: "/mernstack",
          element: <MernStack />,
        },
        {
          path: "/journey",
          element: <CareerPageUpdate />,
        },

        {
          path: "/web3",
          element: <Web3 />,
        },
        {
          path: "/backendIntro",
          element: <BackendInto />,
        },
        {
          path: "/javasScriptRoadMap",
          element: <JavaScriptPage />,
        },
        {
          path: "/pythonRoadMap",
          element: <PythonPage />,
        },
        {
          path: "/javaRoadMap",
          element: <JavaPage />,
        },
        {
          path: "/projectsIntro",
          element: <FullstackProjectsIntro />,
        },
        {
          path: "/Django-Flask",
          element: <PythonStack />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
