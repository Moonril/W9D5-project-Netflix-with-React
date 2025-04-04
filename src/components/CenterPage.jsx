import { Component } from "react"
import SingleRowOne from "./SingleRowOne"
import SingleRowTwo from "./SingleRowTwo"
import SingleRowThree from "./SingleRowThree"
import { Dropdown } from "react-bootstrap"

import MyCarousel from "./MyCarousel"

class CenterPage extends Component {
    render() {
        return(
            <main className="p-1 flex-grow-1 bg-dark">
        {/* titolo */}
        <section className="container">
            <div className="row">
                <div className="col-9 d-flex justify-content-start p-0">
                    <h1 className="text-light me-1 mb-auto mb-0">TV Shows</h1>

                    <Dropdown className="my-auto ms-3">
                        <Dropdown.Toggle variant="dark" className="btn btn-secondary dropdown-toggle bg-transparent rounded-1 border-1 border-light">
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu bg-black rounded-1 ">
                            <Dropdown.Item href="#/action-1" className="dropdown-item text-light link-dark">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className="dropdown-item text-light link-dark">Horror</Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className="dropdown-item text-light link-dark">Comedy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
    
                <div className="col-3 d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-light rounded-1 my-auto"><i className="bi bi-list"></i></button>

                </div>

            </div>
        </section>
            {/* trending */}
        <section className="container-fuid mx-5 my-3">

            <h2 className="text-light fs-4 my-3">Trending</h2>
            <div className="row my-3">
                <SingleRowOne saga='harry potter' />
                
            </div>
        
        {/* watch it */}
        
            <h2 className="text-light fs-4 my-3">Watch It Again</h2>
            <div className="row my-3">
             <SingleRowOne saga='pirates of the caribbean' />
            </div>
        
        {/* <!-- new release --> */}
        
            <h2 className="text-light fs-4 my-3">New Releases</h2>
            <div className="row my-3">
            <SingleRowOne saga='star wars' />
            
            </div>
        </section>

    </main>
        )
    }
}

export default CenterPage