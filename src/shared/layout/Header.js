import React, { useState } from 'react';
import logo from './logo.svg';
import AppState from '../../../src/app/context/app/state';

const Header = () => {

    return (
        <div className="header py-4">
            <div className="container">
                <div className="d-flex">
                    <a className="header-brand" href="/">
                        <img src={logo} className="header-brand-img" alt="Taskker" />
                        TENNIS RENTALS
                    </a>
                    <div className="d-flex order-lg-2 ml-auto">
                        <div className="dropdown">

                            <a href="/login"  className="nav-link pr-0 leading-none">
                                <span className="ml-2 d-none d-lg-block"><span className="text-default">Log in</span>
                                </span>
                             </a>

                            <a href="/profile"  className="nav-link pr-0 leading-none">
                            
    <span className="ml-2 d-none d-lg-block"><span className="text-default">Hello,</span>
                                </span>
                            </a>
                            
                            }
                        </div>
                    </div>
                    <a href="/"   className="header-toggler d-lg-none ml-3 ml-lg-0"><span className="header-toggler-icon"></span></a>
                </div>
            </div>
        </div>
    )
}

export default Header;
