import React, { Component } from 'react';
import AppLayout from '../../shared/layout/AppLayout';



class HomePage extends Component {

    state = {

    }

    render() {
        return (
            <AppLayout>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6">
                                <h2>TENNIS COURTS</h2>
                                <img src="https://img.pngio.com/tennis-court-png-clipart-best-web-clipart-tennis-court-png-5000_2452.png" alt="tennis"/>
                                <button variant="contained">Rent</button>
                            </div>
                            <div className="card col-md-6">
                                <h2>TENNIS TABLES</h2>
                                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Ping-Pong-PNG-Image.png" alt="tennis"/>
                                <button variant="contained">Rent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
                
        )
    }

}

export default HomePage;
