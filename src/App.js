import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
     <Container>
      <Header />
        <Main />

     </Container>
    </div>
  );
}

export default App;
