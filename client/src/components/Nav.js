import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-style">
            <Link to='/home'>
            <a className="navbar-brand" href="#">CollegeConnect <i class="fas fa-graduation-cap"></i></a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to='/home'>
                        <a className="nav-item nav-link nav-tab">Home <i class="fas fa-home"></i></a>
                    </Link>
                    {/* <Link to='/about'>
                        <a className="nav-item nav-link nav-tab">About us <i class="fas fa-users"></i></a>
                    </Link> */}
                    <Link to='/existinguser'>
                        <a className="nav-item nav-link nav-tab">My Books <i class="fas fa-book-open"></i></a>
                    </Link>
                    <Link to='/books'>
                        <a className="nav-item nav-link nav-tab">Search Books <i class="fas fa-search"></i></a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
