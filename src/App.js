import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
     <Container>
        <Navbar />
        <Header/>
        <Main/>
     </Container>
    </div>
  );
}

export default App;
