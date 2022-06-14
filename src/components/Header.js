import React from 'react';
import { Link } from 'react-router-dom';
import { merkLogo } from '../const/Images';
import { logout } from '../utils';
import { api } from '../const/Url';
import '../styles/Header.css';

const Header = () => {

    const logOut = async () => {
        await fetch(api + "/logout", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        logout();
        window.location.reload(false);
    }

    return (
        <React.Fragment>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
                    <img className="mb-1 mt-1" src={merkLogo} alt="" width="36" height="28" />
                </div>
                {/* <button className="navbar-toggler d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link sing-out" to="/" onClick={logOut}>Salir</Link>
                    </li>
                </ul>
            </header>
        </React.Fragment>
    )
}

export default Header
