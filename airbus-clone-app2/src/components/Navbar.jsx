import React, { useState } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";
import { GiHamburgerMenu} from "react-icons/gi"
import "../App.css"

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
        <nav className="main-nav">
            {/* 1st-->logo-part */}
            <div className="logo">
                <h2><span>A</span>irbus</h2>
            </div>
            {/* 2nd-->menu-part */}
            <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Search Flights</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Checkout</a>
                    </li>
                </ul>
            </div>
            {/* 3rd-->Social-media-links */}
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="#">
                            <FaFacebookSquare className="facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaInstagramSquare className="instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTwitterSquare className="twitter"/>
                        </a>
                    </li>
                </ul>
                <div className="hamburger-menu">
                    <a href="#" onClick={ () => setShowMediaIcons(!showMediaIcons) }>
                        <GiHamburgerMenu/>
                    </a>
                </div>
            </div>
        </nav>
        {/* hero-section */}
        <section className="hero-section">
            <p>Welcome to</p>
            <h1>Airbus</h1>
        </section>
    </>
  )
}

export default Navbar