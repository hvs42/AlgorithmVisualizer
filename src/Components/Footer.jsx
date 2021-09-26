import React from 'react'

function Footer() {

    /*
        Size of fontawesome icon :- https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
    */

    let currentYear = new Date().getFullYear();


    return (
    <footer id="footer">
          
          {/* <a>
            <i className="fas fa-envelope"></i>
          </a>
          <a>
            <i className="social-icon fab fa-facebook-f"></i>
          </a> */}
         <strong> <p className="copyright">© Copyright {currentYear} - Harsh Vardhan Singh</p></strong>
      </footer>
    )
}

export default Footer;
