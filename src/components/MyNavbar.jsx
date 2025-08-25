import { Dropdown } from "react-bootstrap"
import { Link, useLocation } from 'react-router-dom'


const MyNavbar = function () {

    const location = useLocation()


    return(
        <header className="sticky-top">
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                <img src="netflix_logo.png" alt="netflix logo" width="70" height="30" />
                </Link>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className={location.pathname === '/' ? 'nav-link text-light' : 'nav-link text-secondary'} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className={location.pathname === '/shows' ? 'nav-link text-light fw-bold' : 'nav-link fw-bold text-secondary'} >TV Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/movies' className={location.pathname === '/movies' ? 'nav-link text-light' : 'nav-link text-secondary'} >Movies</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" aria-current="page" href="#">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" aria-current="page" href="#">My List</a>
                        </li>
                    </ul>


                    {/* right side */}
                    <button className="border-0 bg-transparent mx-1">
                        <Link to='/search' className="text-light"><i className="bi bi-search"></i></Link>
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
                        <img src="avatar.png" alt="netflix logo" width="35" height="35" className="rounded" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end bg-black">
                        <Link to='/profile' className={location.pathname === '/profile' ? 'dropdown-item text-light link-dark' : 'dropdown-item text-secondary link-dark'} >Profile</Link>
                        <Link to='/notifications' className={location.pathname === '/notifications' ? 'dropdown-item text-light link-dark' : 'dropdown-item text-secondary link-dark'} >Notifications</Link>
                        <Link to='/search' className={location.pathname === '/search' ? 'dropdown-item text-light link-dark' : 'dropdown-item text-secondary link-dark'} >Search</Link>
                        <Link to='/settings' className={location.pathname === '/settings' ? 'dropdown-item text-light link-dark' : 'dropdown-item text-secondary link-dark'} >Settings</Link>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
          </nav>
    </header>
    )
}

export default MyNavbar