import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import Navigation from '../_components/Navigation';
import '../_images/tennis-court.png';

const img1 = require('../_images/tennis-court.png');


class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-12">
                <div className="row">
                <Navigation user={user}/>
            </div>
                    <div className="row">
                        <div className="card col-md-6">
                            <h2>TENNIS COURTS</h2>
                            <img className="card-img-top" src="https://static.turbosquid.com/Preview/000337/574/G9/tennis-court-arena-3d-model_Z.jpg" alt="tennis"/>
                            <a href="/tennis-courts">
                                <button className="btn btn-primary btn-lg" style={{marginTop: 20, marginLeft:180}}>Rent tennis courts</button>
                            </a>
                        </div>
                        <div className="card col-md-6">
                            <h2>TENNIS TABLES</h2>
                            <img className="card-img-top" src="http://www.pngall.com/wp-content/uploads/2016/05/Ping-Pong-PNG-Image.png" alt="tennis"/>
                            <a href="/tennis-tables">
                                <button className="btn btn-primary btn-lg" style={{marginTop: 60, marginLeft:180, marginBottom:20}}>Rent tennis tables</button>
                            </a>
                        </div>
                        <div className="row">
                            <div className="card col-md-6">

                            </div>
                            <div className="card col-md-6">

                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };