import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Admin from "./components/admin";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Home from "./components/auth/home";
import Student from "./components/student";
import Instructor from "./components/instructor";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Home />,
    },
    {
      path: "/student",
      element: <Student />,
    },
    {
      path: "/instructor",
      element: <Instructor />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
