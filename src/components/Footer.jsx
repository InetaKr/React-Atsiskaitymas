import { Link } from "react-router-dom";
import logo from '../media/logo.png'

const Footer = () => {
  
  return (
    <>
    <footer className="footer-wrapper">
      <div className="footer-first-section">
        <div className="footerLogo">
          <Link to= "/">
            <img src={logo} alt="logo" />
            </Link>
        </div>
        <div className="footer-text">
          <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
          elit,Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="footer-social-icon">
          <span>Follow us</span>
          <a href="#"><i className="fa fa-facebook-f facebook-bg"></i></a>
          <a href="#"><i className="fa fa-twitter twitter-bg"></i></a>
          <a href="#"><i className="fa fa-google-plus google-bg"></i></a>
        </div>
      </div>
      <div className="footer-second-section">
        <div className="companyInfo">
          <i className="fa fa-map-marker"></i>
          <div className="companyInfo-text">
            <h4>Find us</h4>
            <span>1010 MeowAvenue, sw 12334, Pawcity</span>
          </div>
        </div>
        <div className="companyInfo">
          <i className="fa fa-phone"></i>
          <div className="companyInfo-text">
            <h4>Call us</h4>
            <span>+37068123123</span>
          </div>
        <div className="companyInfo">
          <i className="fa fa-envelope-open"></i>
          <div className="companyInfo-text">
            <h4>Mail Us</h4>
            <span>CatLovers@info.com</span>
          </div>
        </div>  
      </div>
      <div className="third-section">
        <div className="third-section-headeing">
          <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
        </div>
        <div className="subscribe-form">
          <form action="#">
            <input type="email" placeholder="Email Address" />
            <button><i className="fa fa-send" /></button>
          </form>
        </div>
      </div>
    </div>     
  </footer>
    </>
  );
}
  
  export default Footer;