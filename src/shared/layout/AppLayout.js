import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';  // moved to Nav

// import logo from './logo.svg';               // moved to Header
import Header from './Header';
import Nav from './Nav';
import AppState from '../../../src/app/context/app/state';

 
class AppLayout extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          activeUser: {
            firstName: '',
            lastName: ''
          }
        }
    
      }
    render() {

        const { children } = this.props;

        return (

                <div>   {/* <Page> */}
                    <div className={"page-main"}>     {/* <Page.Main> */}
                        <AppState>
                        {/* <Site.Header /> */}
                        <Header />
                        {/* <Site.Nav /> */}
                        <Nav />
                        </AppState>
                        {/* <Page.Content /> */}
                        { children }
                    </div>
                </div>

        )
    }
}


export default AppLayout;
