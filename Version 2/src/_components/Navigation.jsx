import React from 'react';

const Navigation = ({ user }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-12">
            <a className="navbar-brand" href="/">Tennis Rentals</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item active" style={{width:110}}>
                        <a className="nav-link" href="/tennis-courts">Tennis Courts</a>
                    </li>
                    <li className="nav-item active" style={{width:110}}>
                        <a className="nav-link" href="/tennis-tables">Tennis Tables</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/profile">Profile</a>
                    </li>
                    <li className="nav-item" style={{marginLeft: 400}}>
                        <a className="nav-link disabled" aria-disabled="true" >Hi, {user.firstName} {user.lastName}!</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Logout</a>

                    </li>
                </ul>
            </div>
        </nav>
)
};

export default Navigation;
