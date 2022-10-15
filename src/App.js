import "./App.css";
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />
        <Weather city="Houston" />
        <a
          className="App-link"
          href="https://github.com/daratyoon/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-Sourced Code
        </a>
        <span>by Sandra Tsai-Yun</span>
      </header>
    </div>
  );
}

export default App;
