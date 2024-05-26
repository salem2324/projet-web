
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import "./index.css";
import InscriptionPage from "./pages/inscription.jsx";
import Profile from "./pages/profile.jsx";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/inscription",
    element: <InscriptionPage />,
  },
  {
    path: "/home",
    element: <Profile />,
  },
  
]);


  function App() {
    return <div className="App">
      <RouterProvider router={routes}></RouterProvider>
  
    </div>;
  }
  
  export default App;
