import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import Navigation from '../_components/Navigation';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-12">
                <div className="row">
                <Navigation user={user}/>
                {/*{users.loading && <em>Loading users...</em>}*/}
                {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
                {/*{users.items &&*/}
                {/*    <ul>*/}
                {/*        {users.items.map((user, index) =>*/}
                {/*            <li key={user.id}>*/}
                {/*                {user.firstName + ' ' + user.lastName}*/}
                {/*                {*/}
                {/*                    user.deleting ? <em> - Deleting...</em>*/}
                {/*                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>*/}
                {/*                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>*/}
                {/*                }*/}
                {/*            </li>*/}
                {/*        )}*/}
                {/*    </ul>*/}
                {/*}*/}
            </div>
                    <div className="row">
                        <div className="card col-md-6">
                            <h2>TENNIS COURTS</h2>
                            <img className="card-img-top" src="https://img.pngio.com/tennis-court-png-clipart-best-web-clipart-tennis-court-png-5000_2452.png" alt="tennis"/>
                            <a href="/tennis-courts">
                                <button className="btn btn-primary btn-lg" style={{marginTop: 95}}>Rent tennis courts</button>
                            </a>
                        </div>
                        <div className="card col-md-6">
                            <h2>TENNIS TABLES</h2>
                            <img className="card-img-top" src="http://www.pngall.com/wp-content/uploads/2016/05/Ping-Pong-PNG-Image.png" alt="tennis"/>
                            <a href="/tennis-tables">
                                <button className="btn btn-primary btn-lg">Rent tennis tables</button>
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