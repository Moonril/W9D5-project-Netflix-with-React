import { Container } from "react-bootstrap"
import { Dropdown } from "react-bootstrap"

const MyProfile = function() {
    return (
        <Container className="p-5 flex-grow-1 bg-dark">
            <div className="row text-light">
                <h1>Edit Profile</h1>
                <hr />
            </div>
            <div className="row">
            <div className="col-12 col-md-3 text-center p-2">
                <img src="avatar.png" alt="profile pciture" className="w-75" />
                
            </div>
            <div className="col-12 col-md-9 p-2">
                <form action="">
                    <input type="text" value="Profile Name" className="rounded-0 bg-secondary text-light border-0 p-1 w-50 my-1 mb-2" />
                    <label for="language" className="d-block text-secondary fw-bold my-1">Language:</label>
                    <Dropdown>
                    <Dropdown.Toggle variant="dark" className="btn btn-secondary dropdown-toggle bg-transparent rounded-1 border-1 border-light">
                        English
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end bg-black">
                        <Dropdown.Item className="dropdown-item text-light link-dark">English</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item text-light link-dark">Italiano</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item text-light link-dark">日本語</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                    <hr className="text-secondary" />

                    <label for="language" className="d-block text-secondary fw-bold my-1 fs-5">Maturity Settings:</label>
                    <Dropdown>
                    <Dropdown.Toggle variant="secondary" className="btn btn-secondary dropdown-toggle bg-transparent rounded-1 border-1 border-light">
                        ALL MATURITY RATINGS
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end bg-black">
                        <Dropdown.Item className="dropdown-item text-light link-dark">ALL MATURITY RATINGS</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item text-light link-dark">NO MATURITY RATINGS</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    <p className="text-light my-2">Show titles of <span className="fw-bold">all maturity ratings</span> for this profile</p>

                    <button type="button" className="btn btn-outline-light rounded-0 my-2">Edit</button>
                    
                    <hr className="text-secondary" />
                    
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
                <hr className="text-secondary" />
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