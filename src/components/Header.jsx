import Image from "react-bootstrap/Image";
import Bootstrap from "../components/assets/bootstrap-themes.webp";
import Logoreact from "../components/assets/covertrans.png";

export const Header = () => {
  return (
    <div className="bgcolordark">    
    <h1 className="visually-hidden">Html 2 React</h1>
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4"><Image src={Logoreact}  className="d-block mx-lg-auto img-fluid" alt="Logoreact" width="200" height="48" loading="lazy" /></span>
        </a>
         <ul className="nav nav-pills">
         <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
         <li className="nav-item"><a href="#custom-card" className="nav-link">Examples</a></li>
         <li className="nav-item"><a href="#compare" className="nav-link">Compare</a></li>        
         <li className="nav-item"><a href="#compare" className="nav-link">About</a></li>
        </ul>
        </header>
    </div>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <Image src={Bootstrap}  className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
       <h1 className="display-5 fw-bold lh-2 mb-3 titan">Transform your old <span className="color1">HTML</span> project to <span className="color2">React JS</span></h1>     
         <p className="lead colorwhite">Quickly let us design and customize your responsive mobile-first sites with Bootstrap and React JS to prevent vulnerabilities that hackers can exploit. In Normal html basic website one such vulnerability is cross-site scripting (XSS). React Js is the solution to prevent your website from attack.</p>
       <div className="d-grid gap-2 d-md-flex justify-content-md-start">
         <a href="https://bespoke-buttercream-df5021.netlify.app/" target="_blank">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">See a demo</button>  
</a>
        </div>
      </div>
    </div>
  </div>    
    </div>
  );
};
