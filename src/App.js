import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './headers.css';
import './features.css';
import { Inside } from "./components/Inside";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Inside />
      </header>
      <Footer /> 
    </div>
  );
}

export default App;
