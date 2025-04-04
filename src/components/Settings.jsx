import { Container } from "react-bootstrap"

const Settings = function(){
    return(
        <main className="p-5 flex-grow-1 bg-dark">
        <div className="row text-light my-3">
            <h1>Account</h1>
            <hr className="my-1" />
        </div>
        <div className="row">
            <div className="col-12 col-md-3 text-center text-md-start p-2">
                <p className="fs-6 text-secondary fw-bold">MEMBERSHIP & BILLING</p>
                <button type="button" className="btn btn-secondary rounded-0 px-4">Cancel Membership</button>
            </div>
            <div className="col col-md-9 p-2 d-flex justify-content-between">
                <div className="left">
                    <p className="fs-8 text-light fw-bold">student@strive.school</p>
                    <p className="fs-8 text-secondary fw-bold">Password: *******</p>
                    <p className="fs-8 text-secondary fw-bold">Phone: 123 123123</p>
                    <hr className="my-1  text-light" />
                    <p className="fs-8 text-light fw-bold">admin@strive.school</p>
                    
                </div>
                <div className="right text-end">
                    <p><a className="link-opacity-100" href="#">Change account email</a></p>
                    <p><a className="link-opacity-100" href="#">Change password</a></p>
                    <p><a className="link-opacity-100" href="#">Change phone number</a></p>
                    <hr className="my-1  text-light" /> 
                    <p><a className="link-opacity-100" href="#">Update payment info</a></p>
                    <p><a className="link-opacity-100" href="#">Billing details</a></p>
                    <hr className="my-1  text-light" /> 
                    <p><a className="link-opacity-100" href="#">Redeem gift card or pormo code</a></p>
                    <p><a className="link-opacity-100" href="#">Where to buy gift cards</a></p>
                </div>
            </div>
            
            <hr className="text-light" />
        </div>
        
        <div className="row">
            <div className="col-12 col-md-3 text-center text-md-start p-2">
                <p className="fs-6 text-secondary fw-bold">PLAN DETAILS</p>
            </div>
            <div className="col col-md-9 p-2 d-flex justify-content-between">
                <div className="left">
                    <p className="fs-8 text-light fw-bold">Premium <i className="bi bi-badge-hd"></i></p>
                </div>
                <div className="right text-end">
                    <p><a className="link-opacity-100" href="#">Change plan</a></p>

                </div>
            </div>
            <hr className="text-light" />
        </div>
        
        <div className="row">
            <div className="col-12 col-md-3 text-center text-md-start p-2">
                <p className="fs-6 text-secondary fw-bold">SETTINGS</p>
            </div>
            <div className="col col-md-9 p-2 d-flex justify-content-between">
                <div className="light">
                    <p><a className="link-opacity-100" href="#">Parental controls</a></p>
                    <p><a className="link-opacity-100" href="#">Test participation</a></p>
                    <p><a className="link-opacity-100" href="#">Manage donwload devices</a></p>
                    <p><a className="link-opacity-100" href="#">Activate a device</a></p>
                    <p><a className="link-opacity-100" href="#">Recent device streaming activity</a></p>
                    <p><a className="link-opacity-100" href="#">Siwn out of all devices</a></p>
                </div>
            </div>
            <hr className="text-light" />
        </div>
        
        <div className="row">
            <div className="col-12 col-md-3 text-center text-md-start p-2">
                <p className="fs-6 text-secondary fw-bold">MY PROFILE</p>
            </div>
            <div className="col col-md-9 p-2 d-flex justify-content-between">
                <div className="left">
                    <p className="fs-8 text-light fw-bold"> Strive student</p>
                    <p><a className="link-opacity-100" href="#">Language</a></p>
                    <p><a className="link-opacity-100" href="#">Playback settings</a></p>
                    <p><a className="link-opacity-100" href="#">Subtitle appearance</a></p>

                </div>
                <div className="center">
                    <p><a className="link-opacity-100" href="#"></a></p>
                    <p><a className="link-opacity-100" href="#"></a></p>
                    <p><a className="link-opacity-100" href="#"></a></p>
                    <p><a className="link-opacity-100" href="#"></a></p>
                    <p><a className="link-opacity-100" href="#"></a></p>
                    <p><a className="link-opacity-100" href="#">Viewing activity</a></p>
                    <p><a className="link-opacity-100" href="#">Ratings</a></p>
                </div>
                <div className="right text-end">
                    <p><a className="link-opacity-100" href="#">Manage profiles</a></p>
                    <p><a className="link-opacity-100" href="#">Add profile email</a></p>
                </div>
            </div>
            <hr className="text-light" />
        </div>

    </main>
    )
}

export default Settings