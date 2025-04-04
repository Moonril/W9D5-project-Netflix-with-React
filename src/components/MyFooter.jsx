// aggiungere link on hover


const MyFooter = function() {
    return(
        <footer className="py-3 d-flex flex-column bg-dark">
        <div className="social d-flex mx-auto">
            <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none me-1" href="/" aria-label="Bootstrap">
                <i className="bi bi-facebook text-secondary"></i>
            </a>
            <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none me-1" href="/" aria-label="Bootstrap">
                <i className="bi bi-instagram text-secondary"></i>
            </a>
            <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none me-1" href="/" aria-label="Bootstrap">
                <i className="bi bi-twitter text-secondary"></i>
            </a>
            <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none me-1" href="/" aria-label="Bootstrap">
                <i className="bi bi-youtube text-secondary"></i>
            </a>
        </div>

        <div className="liste d-flex mx-auto">
            <div className="list1">
                <ul>
                    <li><a href="#" className="text-decoration-none text-secondary">Audio and Subtitles</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Media Center</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Privacy</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Contact Us</a></li>
                </ul>
            </div>
            <div className="list1">
                <ul>
                    <li><a href="#" className="text-decoration-none text-secondary">Audio and Subtitles</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Media Center</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Privacy</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Contact Us</a></li>
                </ul>
            </div>
            <div className="list1">
                <ul>
                    <li><a href="#" className="text-decoration-none text-secondary">Audio and Subtitles</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Media Center</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Privacy</a></li>
                    <li><a href="#" className="text-decoration-none text-secondary">Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div className="copyright d-flex flex-column mx-auto">
            <button type="button" className="btn btn-outline-secondary mb-2">Service Code</button>
            <p className="text-secondary mb-0">1197-2019 Netflix, inc</p>
        </div>
    </footer>
    )
}

 export default MyFooter