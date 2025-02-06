import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Workspaces from "./pages/Workspaces";
import Schedules from "./pages/Schedules";
import RootPage from "./pages/RootPage/RootPage";
import daytime from "./assets/daytime.png";
import Modal from "./Components/Modal";
import NotificationList from "../src/Components/Notifications";
import { useAuth } from "./services/AuthProvider/UseAuth";
function App() {
  const location = useLocation();
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <Modal />
      <NotificationList></NotificationList>
      {location.pathname !== "/" && <Navbar />}{" "}
      {/* Muestra Navbar solo si no es la ruta '/' */}
      {location.pathname !== "/" && (
        <img
          src={daytime}
          className="left-0 absoul top-0 h-8 m-5"
          alt="Daytime logo"
        />
      )}
      <Routes>
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/workspaces"
          element={user ? <Workspaces /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/schedules"
          element={user ? <Schedules /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <RootPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
