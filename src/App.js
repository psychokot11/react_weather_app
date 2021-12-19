import "./App.css";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <SearchEngine />
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default App;
