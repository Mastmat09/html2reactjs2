import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './headers.css';
import './features.css';
import { Header } from "./components/Header";
import { Inside } from "./components/Inside";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Header />
       <Inside />     
       <Footer /> 
    </div>
  );
}

export default App;
