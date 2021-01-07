import './App.css';
import Header from "./components/Header.js";
import Navbar from "./components/NavBar.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header/>
        <Main/>
    </div>
    </div>
  );
}

export default App;
