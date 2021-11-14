import './App.css';
import TopBar from "./components/Topbar/index";
import Navbar from "./components/Navbar/index";
import Carousels from "./components/Carousels/index";
import Cards from "./components/Cards/index";

function App() {
  return (
    <div className="App">
          <Navbar />
          <TopBar />
          <Carousels />
          <Cards />
    </div>
  );
}

export default App;