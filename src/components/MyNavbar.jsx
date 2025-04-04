// dropdown non funziona


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
                <div className="dropdown">
                    <a className="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="avatar.png" alt="netflix logo" width="30" height="30" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end bg-dark" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item text-light link-dark" href="/profile.html">Profile</a></li>
                    <li><a className="dropdown-item text-light link-dark" href="#">Notifications</a></li>
                    <li><a className="dropdown-item text-light link-dark" href="http://www.google.com">Search</a></li>
                    <li><a className="dropdown-item text-light link-dark" href="/settings.html">Settings</a></li>
                    </ul>
                </div>
            </div>
          </nav>
    </header>
    )
}

export default MyNavbar