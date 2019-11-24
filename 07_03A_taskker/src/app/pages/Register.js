import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';

import UserContext from '../context/users/context';

const Register = (props) => {

    const [navToLogIn, setNavToLogIn] = useState(false);
    const { newUser } = useContext(UserContext)

    // form fields - hooks way
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reenteredPassword, setReenteredPassword] = useState("");

    const add = (e) => {
        e.preventDefault();
        // saveUser()
        newUser({
            firstName,
            lastName,
            email,
            password,
            reservationId: null,
            points: 0,
        });
    }
    const register = (e) => {
        if(password === reenteredPassword){
        add(e);
        props.history.push('/');
        }
    }

    const activateNavToLogIn = () => {
        setNavToLogIn(true);
    }
    if (navToLogIn) return <Redirect to="/login" />

    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="card col col-md-10">
                            <div className="card-header d-flex justify-content-between">
                                <h3 className="mt-2" style={{ display: 'inline-block'}}>Register</h3>
                                <button onClick={ activateNavToLogIn } 
                                    className="btn btn-info"> Back to login </button>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col col-md-9">
                                            <div className="form-group">
                                                <label className="form-label">First Name</label>
                                                <input value={ firstName } 
                                                    onChange={ ev => setFirstName(ev.target.value) }
                                                    className="form-control" type="text" /></div> 
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">Last Name</label>
                                                <input value={ lastName } 
                                                    onChange={ ev => setLastName(ev.target.value) }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input value={ email } 
                                                    onChange={ ev => setEmail(ev.target.value) }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <input value={ password } 
                                                    type="password"
                                                    onChange={ ev => setPassword(ev.target.value) }
                                                    className="form-control" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Reenter Password</label>
                                                <input value={ reenteredPassword } 
                                                    type="password"
                                                    onChange={ ev => setReenteredPassword(ev.target.value) }
                                                    className="form-control" /></div>
                                        </div>
                                        { password !== reenteredPassword &&
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <h2>Passwords not matching</h2>
                                        </div>
                                        </div>
                                        }
                                    
                    
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={ register }
                                        className="btn btn-primary ml-3">
                                        Register</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Register;