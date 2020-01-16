import React, { useState } from 'react';
// import logo from './logo.svg';

const Header = () => {

    return (
        <div className="header py-4">
            <div className="container">
                <div className="d-flex">
                    <div className="d-flex order-lg-2 ml-auto">
                            <a href="/login"  className="nav-link pr-0 leading-none">
                                <span className="ml-2 d-none d-lg-block"><span className="text-default">Log in</span>
                                </span>
                            </a>

                            <a href="/profile"  className="nav-link pr-0 leading-none">

    <span className="ml-2 d-none d-lg-block"><span className="text-default">Hello,</span>
                                </span>
                            </a>
                            <a href="/"  className="nav-link pr-0 leading-none">

    <span className="ml-2 d-none d-lg-block"><span className="text-default">Log out</span>
                                </span>
                            </a>


                        </div>
                    </div>
                    <a href="/"   className="header-toggler d-lg-none ml-3 ml-lg-0">
                        <span className="header-toggler-icon"></span></a>
                </div>
            </div>
    )
};

export default Header;
