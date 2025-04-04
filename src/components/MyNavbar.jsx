import { Dropdown } from "react-bootstrap"


const MyNavbar = function () {
    return(
        <header>
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="netflix_logo.png" alt="netflix logo" width="70" height="30" />
              </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold text-light" href="#">TV Shows</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Recently Added</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">My List</a>
                    </li>
                    </ul>


                    {/* right side */}
                    <button className="border-0 bg-transparent mx-1">
                        <a href="#" className="text-light"><i className="bi bi-search"></i></a>
                    </button>
                    <button className="border-0 bg-transparent mx-1">
                        <a href="#" className="text-light text-decoration-none">KIDS</a>
                    </button>
                    <button className="border-0 bg-transparent mx-1">
                        <a href="#" className="text-light"><i className="bi bi-bell-fill"></i></a>
                    </button>

                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="dark">
                        <img src="avatar.png" alt="netflix logo" width="30" height="30" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end bg-black">
                        <Dropdown.Item href="/profile.html" className="dropdown-item text-light link-dark">Profile</Dropdown.Item>
                        <Dropdown.Item href="/profile.html" className="dropdown-item text-light link-dark">Notifications</Dropdown.Item>
                        <Dropdown.Item href="/profile.html" className="dropdown-item text-light link-dark">Search</Dropdown.Item>
                        <Dropdown.Item href="/settings.html" className="dropdown-item text-light link-dark">Settings</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
          </nav>
    </header>
    )
}

export default MyNavbar