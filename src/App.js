import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen items-center justify-center bg-gray-900">
        <Navbar />
        <Search />
      </div>
    </div>
  );
}

export default App;
