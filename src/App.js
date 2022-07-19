import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Search />
      </div>
    </div>
  );
}

export default App;
