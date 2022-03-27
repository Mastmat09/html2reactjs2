import logo from './logo.svg';
import './App.css';

import './features.css';
import { Header } from "./components/Header";
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
       
      </header>
      <Footer /> 
    </div>
  );
}

export default App;
