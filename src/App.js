import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  const [data, setData] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(data)
  }
  
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <h1>Hello World!</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" name = "firstName" onChange={handleChange}/>
            </div>
            <div>
              <input type="text" name = "lastName" onChange={handleChange}/>
            </div>
            <div>
              <input type="checkbox" name ='isOk'onChange={handleChange}/>
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
