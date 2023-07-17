import SideNav from "./Components/SideNav/SideNav";
import Nav from "./Components/Nav/Nav";
import Authentication from "./Pages/Authentication";
import Dashboard from "./Pages/Dashboard";
import Assets from "./Pages/Assets";
import Booking from "./Pages/Booking";
import SellCars from "./Pages/SellCars";
import Calender from "./Pages/Calender";
import Services from "./Pages/Services";
import Settings from "./Pages/Settings";
import Messages from "./Pages/Messages";

import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const socket = io("http://localhost:8080", { autoConnect: false });
  const navigate = useNavigate();
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [username, setUserName] = useState(null);
  const [connectedUsers, setConnectedUsers] = useState([]);

  const handleLoginUser = () => {
    navigate("/");
    setUserIsAuthenticated(true);
    socket.auth = { username };
    socket.connect();
  };

  useEffect(() => {
    socket.on("user connected", (user) => {
      if (user.username) {
        setConnectedUsers((prev) => [...prev, user]);
      }
    });
    socket.connect();
  }, []);

  return (
    <div>
      {!userIsAuthenticated && (
        <Routes>
          <Route
            path="/auth/signin"
            element={
              <Authentication
                setUserAuthentication={setUserIsAuthenticated}
                setUserName={setUserName}
                handleLoginUser={handleLoginUser}
              />
            }
          />
          <Route path="/*" element={<Navigate to="/auth/signin" />} />
        </Routes>
      )}
      {userIsAuthenticated && (
        <div className="flex flex-row">
          <SideNav />
          <div className="flex-1">
            <Nav />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/sell" element={<SellCars />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/services" element={<Services />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/messages"
                element={<Messages connectedUsers={connectedUsers} />}
              />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
