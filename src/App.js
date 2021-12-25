import "./App.css";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <SearchEngine city="Oslo" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
