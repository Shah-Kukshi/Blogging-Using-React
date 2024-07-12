import React from 'react';
import logo from "./assets/images/logo.svg";
import { Link } from 'react-router-dom';
import './assets/css/style.css';
function Footer (){
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top section">

          <div className="footer-brand">

            <Link to="/" className="logo">
              <img src={logo} width="129" height="40" alt="Blogy logo" />
            </Link>

            

          </div>

          <ul className="footer-list">

            <li>
              <p className="h5">Social</p>
            </li>

            <li className="footer-list-item">
              <ion-icon name="logo-facebook"></ion-icon>

              <Link to="#" className="footer-link hover:underline">Facebook</Link>
            </li>

            <li className="footer-list-item">
              <ion-icon name="logo-twitter"></ion-icon>

              <Link to="#" className="footer-link hover:underline">Twitter</Link></li>

            <li className="footer-list-item">
              <ion-icon name="logo-pinterest"></ion-icon>

              <Link to="#" className="footer-link hover:underline">Pinterest</Link>
            </li>

            <li className="footer-list-item">
              <ion-icon name="logo-vimeo"></ion-icon>

              <Link to="#" className="footer-link hover:underline">Vimeo</Link>
            </li>

          </ul>
          

          <ul className="footer-list">

            <li>
              <p className="h5">About</p>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Style Guide</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Features</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Contact</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">404</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Privacy Policy</Link>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="h5">Features</p>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Upcoming Events</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Blog & News</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Features</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">FAQ Question</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Testimonial</Link>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="h5">Membership</p>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Account</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Membership</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Subscribe</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Tags</Link>
            </li>

            <li>
              <Link to="#" className="footer-link hover:underline">Authors</Link>
            </li>

          </ul>

        </div>

        <div className="section footer-bottom">

          <p className="copyright">
            &copy; Blogy 2022.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
