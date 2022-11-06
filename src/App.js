import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchEngine defaultCity="Houston" />
        </header>
        <footer>
          <a
            className="App-link"
            href="https://github.com/daratyoon/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced Code
          </a>
          <span> by Sandra Tsai-Yun</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
