import SideNav from "./Components/SideNav/SideNav";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Pages/Dashboard";
import Assets from "./Pages/Assets";
function App() {
  return (
    <div className="flex flex-row">
      <SideNav />
      <div className="flex-1">
        <Nav />
        <Assets />
      </div>
    </div>
  );
}

export default App;
