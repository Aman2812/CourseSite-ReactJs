import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-100 bg-light text-center">
        <div className="main-footer"> 
        <div className="container">
        <div  className="row">
        {/*column1 */}
        <div className="col">
        <h4>YOUR COMPANY INC</h4>
        <ul className="list-unstyled">
        <li>799-224-0642</li>
        <li>Bihar,India</li>
        <li>ward no-09, Sasaram</li>
        </ul>
        </div>
        {/*column2 */}
        <div className="col">
        <h4>All STUFF</h4>
        <ul className="list-unstyled">
        <li>latest post</li>
        <li>Archeive post</li>
        <li>Trending post</li>
        </ul>
        </div>
        {/*column3 */}
        <div className="col">
        <h4>Social Accounts</h4>
        <ul className="list-unstyled">
        <li>
        <Link to={{ pathname: "https://www.facebook.com/amanrawal2812" }} target="_blank" class="fa fa-facebook"></Link>
        <Link to={{ pathname: "https://www.instagram.com/its.amankr/" }} target="_blank" class="fa fa-instagram"></Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/aman-kumar2812/" }} target="_blank" class="fa fa-linkedin"></Link>
        </li>
        <li>updated soon...</li>
        </ul>
        </div>
        </div>
        <hr/>
        <div className="row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} YOUR COMPANY INC | All right reserved | Terms Of Service | Privacy
        </p>
        </div>
        </div>
        </div>
        </footer>
            
               
    )
}
export default Footer;