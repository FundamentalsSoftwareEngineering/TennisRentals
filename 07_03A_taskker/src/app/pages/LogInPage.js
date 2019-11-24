import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';
import UserContext from '../context/users/context';
import AppContext from '../context/app/context';

const LogInPage = (props) => {

    const [navToHome, setNavToHome] = useState(false);
    const [logInOk, setLogInOk] = useState(true);

    const { users, getUsers } = useContext(UserContext);
    const { setActiveUser } = useContext(AppContext);

    useEffect(() => {
        getUsers(); 
        // eslint-disable-next-line
    }, [])

    // form fields - hooks way
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = (e) => {
        users.map((user) => {
            if(user.email === email && user.password === password){
            const firstName = user.firstName;
            const lastName = user.lastName
            setActiveUser({
                firstName,
                lastName
            })
            
            } else {
                e.preventDefault();
                setLogInOk(false);
            }
        })
    }

    const activateNavToHome = () => {
        setNavToHome(true);
    }
    if (navToHome) return <Redirect to="/" />

    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="card col col-md-10">
                            <div className="card-header d-flex justify-content-between">
                                <h3 className="mt-2" style={{ display: 'inline-block'}}>Log In</h3>
                                <button onClick={ activateNavToHome } 
                                    className="btn btn-info"> Back to home </button>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col col-md-9">
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input value={ email } 
                                                    onChange={ ev => setEmail(ev.target.value) }
                                                    className="form-control" type="text" /></div> 
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">Password</label>
                                                <input value={ password } 
                                                    type="password"
                                                    onChange={ ev => setPassword(ev.target.value) }
                                                    className="form-control" /></div>
                                        </div>
                                        { !logInOk &&
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <h2>Log In failed</h2>
                                            </div>
                                        </div>
                                        }
                                    
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={ logIn }
                                        className="btn btn-primary ml-3">
                                        Log In</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default LogInPage;