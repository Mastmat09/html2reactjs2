import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './headers.css';
import './features.css';
import { Header } from "./components/Header";
import { Inside } from "./components/Inside";
import { Inside1 } from "./components/Inside1";
import { Footer } from "./components/Footer";

function App() {
  return (   
    <>
       <Header />
       <Inside />  
       <Inside1 />
       <Footer />  
   </>
  );
}

export default App;
