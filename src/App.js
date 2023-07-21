import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <h1>Hello World!</h1>
          <form method="GET">
            <div>
              <input type="text" name = "firstName"/>
            </div>
            <div>
              <input type="checkbox" name ='isOk'/>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
