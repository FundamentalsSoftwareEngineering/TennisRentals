import React from 'react';
import AppLayout from '../../shared/layout/AppLayout';
import { useHistory } from "react-router-dom";

const Register = (props) => {
let history = useHistory();
    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="card col col-md-10">
                            <div className="card-header d-flex justify-content-between">
                                <h3 className="mt-2" style={{ display: 'inline-block'}}>Register</h3>
                                <button
                                    className="btn btn-info"> Back to login </button>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col col-md-9">
                                            <div className="form-group">
                                                <label className="form-label">First Name</label>
                                                <input value={props.firstName}
                                                    onChange={ props.onChangeFirstName }
                                                    className="form-control" type="text" /></div> 
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">Last Name</label>
                                                <input value={ props.lastName } 
                                                    onChange={ props.onChangeLastName }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input value={ props.email } 
                                                    onChange={ props.onChangeEmail }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <input value={ props.password } 
                                                    type="password"
                                                    onChange={ props.onChangePassword }
                                                    className="form-control" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Reenter Password</label>
                                                <input value={ props.reenteredPassword } 
                                                    type="password"
                                                    onChange={ props.onChangeReenterPassword }
                                                    className="form-control" /></div>
                                        </div>
                                        { props.password !== props.reenterPassword &&
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <h2>Passwords not matching</h2>
                                        </div>
                                        </div>
                                        }
                                    
                    
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={props.onRegister}
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