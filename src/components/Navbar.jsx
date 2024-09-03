import React from 'react'
import { Link, NavLink } from 'react'
function Navbar() {
    return (
        <div id="hero">
            <header id="main-header">
                <a href="/">
                    <img src="images/logo-l5.svg" alt="Logo" />
                </a>

                <nav>
                    <ul>
                        <li><a href="#">Jobs</a></li>
                        <li className="has-submenu">
                            <a href="#">Services</a>
                            <ul>
                                <li><a href="#">Logo Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Photography</a></li>
                                <li><a href="#">Content Creator</a></li>
                                <li><a href="#">Video and Animation</a></li>
                            </ul>
                        </li>
                        <li><a href="#">What's New</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}

export default Navbar
