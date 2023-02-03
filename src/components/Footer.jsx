const Footer = () => {
  
  return (
    <>
    <footer>
      <div className="footer-wrapper">
      <div className="footer-first-section">
        <div className="footer-text">
          <p>You Love Cats...WE Love Cats..Everyone here Loves Cats. <br /> If you Love Dogs you do not belong here. <br />
            Let's share our Love for Cats Together !
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
      <div className="footer-heading">
        <h3>Subscribe</h3>
      </div>
        <div className="footer-text">
          <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
        </div>
          <form action="#" className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button><i className="fa fa-send" /></button>
          </form>
      </div> 
      </div>
      <div className="copyright-text">
        <p>Copyright &copy; 2018, All Right Reserved CatLovers</p>
      </div>   
  </footer>
    </>
  );
}
  
  export default Footer;