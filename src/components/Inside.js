export const Inside = () => {
    return (
      <section id="custom-card">
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom React JS websites</h2>
    
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bg-image1" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket3</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bg-image2" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>Pakistan</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg bg-image3" >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>Californias</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
       
    
    
        </div>
      </div>
    </section>
    );
  };