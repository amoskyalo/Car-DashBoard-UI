import SideNav from "./Components/SideNav/SideNav";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Pages/Dashboard";
import Assets from "./Pages/Assets";
import Booking from "./Pages/Booking";
import SellCars from "./Pages/SellCars";
import Calender from "./Pages/Calender";
import Services from "./Pages/Services";
import Settings from "./Pages/Settings";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
