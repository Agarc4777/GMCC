import './App.css';
import TopBar from "./components/Topbar/Index";
import Navbar from "./components/Navbar/Index";
import Carousels from "./components/Carousels/Index";

function App() {
  return (
    <div className="App">
          <TopBar />
          <Navbar />
          <Carousels />
    </div>
  );
}

export default App;