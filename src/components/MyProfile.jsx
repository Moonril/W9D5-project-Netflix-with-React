import { Container } from "react-bootstrap"

const MyProfile = function() {
    return (
        <Container className="bg-dark">
            <div class="row text-light">
                <h1>Edit Profile</h1>
            </div>
            <div className="row">
            <div className="col-12 col-md-3 text-center p-2">
                <img src="avatar.png" alt="profile pciture" className="w-75" />
                
            </div>
            <div className="col-12 col-md-9 p-2">
                <form action="">
                    {/* se metto placeholder non mi funziona, metto value solo per avere qualcosa scritto nell'input */}
                    <input type="text" value="Profile Name" className="rounded-0 bg-secondary text-light border-0 p-1 w-50 my-1 mb-2" />
                    <label for="language" className="d-block text-secondary fw-bold my-1">Language:</label>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle bg-transparent rounded-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          English
                        </a>                
                        <ul className="dropdown-menu bg-dark rounded-1">
                          <li><a className="dropdown-item text-light link-dark" href="#">English</a></li>
                          <li><a className="dropdown-item text-light link-dark" href="#">Italiano</a></li>
                          <li><a className="dropdown-item text-light link-dark" href="#">日本語</a></li>
                        </ul>
                    </div>

                    

                    <label for="language" className="d-block text-secondary fw-bold my-1 fs-5">Maturity Settings:</label>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle bg-secondary rounded-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          ALL MATURITY RATINGS
                        </a>                
                        <ul className="dropdown-menu bg-dark rounded-1">
                          <li><a className="dropdown-item text-light link-dark" href="#">ALL MATURITY RATINGS</a></li>
                          <li><a className="dropdown-item text-light link-dark" href="#">NO MATURITY RATINGS</a></li>
                        </ul>
                    </div>
                    <p className="text-light my-2">Show titles of <span className="fw-bold">all maturity ratings</span> for this profile</p>

                    <button type="button" className="btn btn-outline-light rounded-0 my-2">Edit</button>
                    
                    
                    <p className="fs-5 text-secondary fw-bold">Autoplay controls</p>
                    <label className="d-block mt-2 text-light">
                        <span className="cr"><i className="bi bi-check-lg text-secondary"></i></span>
                        Autoplay next episode in a series on all devices.
                    </label>
                    <label className="d-block mb-2 text-light">
                        <span className="cr"><i className="bi bi-check-lg text-secondary"></i></span>
                        autoplay previews while drowsing on all devices.
                    </label>
                </form>
                
            </div>
        </div>

        <div className="d-flex justify-content-center bg-dark">
            <button type="button" className="btn btn-outline-light rounded-0 my-2 mx-3">SAVE</button>
            <button type="button" className="btn btn-outline-light rounded-0 my-2 mx-3">CANCEL</button>
            <button type="button" className="btn btn-outline-light rounded-0 my-2 mx-3">DELETE PROFILE</button>
        </div>
        </Container>
    )
}

export default MyProfile