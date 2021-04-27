import './App.css';
import TopBar from "./components/Topbar/Index";
import Navbar from "./components/Navbar/Index";
import Carousels from "./components/Carousels/Index";
import Cards from "./components/Cards/index";
import Footer from "./components/Footer/index"

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Carousels />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;