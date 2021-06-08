import React from 'react';

function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a href className="navbar-branch">this is logo</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href>about</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;