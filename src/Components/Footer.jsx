import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer d-flex flex-wrap justify-content-between align-items-center border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;