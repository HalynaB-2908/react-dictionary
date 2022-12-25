import logo from "./undraw_engineering_team_a7n2.svg";
import './App.css';
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="bag"/>
      </main>
      <footer className="App-footer">Coded by me</footer>
      </div>
    </div>
  );
}

export default App;
