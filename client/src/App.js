import './App.css';
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Carousels from "./components/Carousels";

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