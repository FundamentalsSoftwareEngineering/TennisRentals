import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';

class AppLayout extends Component {
    render() {

        const { children } = this.props;

        return (

            <div>
                <div className={"page-main"}>
                        <Header />
                        <Nav />
                </div>
            </div>

        )
    }
}


export default AppLayout;
