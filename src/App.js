import SideNav from "./Components/SideNav/SideNav";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Pages/Dashboard";
import Assets from "./Pages/Assets";
import Booking from "./Pages/Booking";
import SellCars from "./Pages/SellCars";
function App() {
  return (
    <div className="flex flex-row">
      <SideNav />
      <div className="flex-1">
        <Nav />
        <SellCars />
      </div>
    </div>
  );
}

export default App;
