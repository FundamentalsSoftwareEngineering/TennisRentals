import React, { useState } from 'react';
import Navigation from "../_components/Navigation";
import {connect} from "react-redux";
import { profileActions } from "../_actions/profile.actions";
import {tennisCourtsActions} from "../_actions/tennisCourts.actions";

const ProfilePage = (props) => {
    const { user, reservations } = props;
    console.log(reservations);

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [successMessage, setSuccessMessage] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(false);
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleSuccessMessage = () => {
        setSuccessMessage(true);
    };

    return (
        <div className="my-3 my-md-5">
            <Navigation user={user}/>
            <div className="my-3 my-md-5">
                {
                    successMessage &&
                    <p> Account successfully updated </p>
                }
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4">

                            <div className="card card-profile">
                                <div className="card-header"><img src="https://elysator.com/wp-content/uploads/blank-profile-picture-973460_1280-e1523978675847.png" className="col-md-12"/></div>
                                <div className="card-body text-center">
                                    <h3 className="h3 mt-0 mb-4 mb-3">{user.firstName} {user.lastName}</h3>
                                </div>
                            </div>


                        </div>
                        <div className="col col-lg-8">
                            <form className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Edit Profile</h3>
                                    <div className="row">

                                        <div className="col col-sm-6 col-md-3">
                                            <div className="form-group"><label className="form-label">Username</label>
                                                <input className="form-control" type="text" value={username} onChange={handleUsernameChange} /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-4">
                                            <div className="form-group"><label className="form-label">Email address</label>
                                                <input className="form-control" type="email" value={email} onChange={handleEmailChange} /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-4">
                                            <div className="form-group"><label className="form-label">Password</label>
                                                <input className="form-control" type="password" value={password} onChange={handlePasswordChange} /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-6">
                                            <div className="form-group"><label className="form-label">First Name</label>
                                                <input className="form-control" type="text" value={firstName} onChange={handleFirstNameChange} /></div>
                                        </div>
                                        <div className="col col-sm-6 col-md-6">
                                            <div className="form-group"><label className="form-label">Last Name</label>
                                                <input className="form-control" type="text" value={lastName} onChange={handleLastNameChange} /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary" type="button" onClick={ () => {
                                        props.update(username, email, password, firstName, lastName);
                                        handleSuccessMessage();
                                    }}>
                                    Update Profile
                                     </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12" style={{marginTop:50}}>
                            <h2>Reservations</h2>
                            {
                                deleteMessage &&
                                    <p>Reservation successfully deleted</p>
                            }
                            <div className="row" style={{marginBottom:30}}>

                                <div className="col-md-2">
                                    <b>Court Name</b>
                                </div>
                                <div className="col-md-2">
                                    <b>Date</b>
                                </div>
                                <div className="col-md-2">
                                    <b>Start Time</b>
                                </div>
                                <div className="col-md-2">
                                <b>End Time</b>
                            </div>
                                <div className="col-md-2">
                                    <b>Delete</b>
                                </div>
                            </div>
                        { reservations.map((item, i) => {
                            if (item.user === user.id) {
                                return (
                                    <div className="row" key={i}>
                                        <div className="col-md-12" style={{backgroundColor:'black', height:1, marginTop:10, marginBottom:10}}></div>
                                        <div className="col-md-2">
                                            {item.selectedCourt}
                                        </div>
                                        <div className="col-md-2">
                                            {item.day} {item.month} {item.year}
                                        </div>
                                        <div className="col-md-2">
                                            {item.startTime}
                                        </div>
                                        <div className="col-md-2">
                                            {item.endTime}
                                        </div>
                                        {
                                            <div className="col-md-2">
                                                <button className="btn btn-danger" onClick={ () => {
                                                    props.delete(i);
                                                    setDeleteMessage(true);
                                                }}>delete</button>
                                            </div>
                                        }
                                    </div>
                                )
                            }}
                        )
                        }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};


function mapState(state) {
    const { authentication, reservations } = state;
    const { user } = authentication;
    return { user, reservations};
}

const mapDispatch = (dispatch) => ({
    update: (username, email, password, firstName, lastName) => dispatch(profileActions.updateProfile(username, email, password, firstName, lastName)),
    delete: (i) => dispatch(tennisCourtsActions.deleteReservationAction(i))
});

const connectedProfilePage = connect(mapState, mapDispatch)(ProfilePage);
export { connectedProfilePage as ProfilePage };

