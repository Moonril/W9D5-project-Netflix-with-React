import { Component } from "react";

import SingleRow from "./SingleRow";

class CenterPage extends Component {
    render() {
        return(
            <main className="my-3 p-1 flex-grow-1 bg-dark">
        {/* titolo */}
        <section className="container">
            <div className="row">
                <div className="col-9 d-flex justify-content-start p-0">
                    <h1 className="text-light me-1 mb-auto mb-0">TV Shows</h1>
                    <div className="dropdown my-auto ms-3">
                        <a className="btn btn-secondary dropdown-toggle bg-transparent rounded-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Genres
                        </a>                
                        <ul className="dropdown-menu bg-dark rounded-1">
                          <li><a className="dropdown-item text-light link-dark" href="#">Action</a></li>
                          <li><a className="dropdown-item text-light link-dark" href="#">Horror</a></li>
                          <li><a className="dropdown-item text-light link-dark" href="#">Comedy</a></li>
                        </ul>
                      </div>
                </div>
    
                <div className="col-3 d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-light rounded-1 my-auto"><i className="bi bi-list"></i></button>
                    <button type="button" className="btn btn-outline-light rounded-1 my-auto"><i className="bi bi-view-list"></i></button>
                </div>

            </div>
        </section>
            {/* trending */}
        <section className="container-fuid mx-5 my-3">

            <h2 className="text-light fs-4 my-3">Trending</h2>
            <div className="row my-3">
                <SingleRow />
            </div>
        
        {/* watch it */}
        
            <h2 className="text-light fs-4 my-3">Watch It Again</h2>
            <div className="row my-3">

            </div>
        
        {/* <!-- new release --> */}
        
            <h2 className="text-light fs-4 my-3">New Releases</h2>
            <div className="row my-3">

            </div>
        </section>

    </main>
        )
    }
}

export default CenterPage