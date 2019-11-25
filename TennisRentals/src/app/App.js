import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import "../styles/taskker.css";
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

 
import Register from './pages/Register';
import TennisCourtsPage from './pages/TennisCourtsPage';

import UserState from './context/users/state';
import AppState from './context/app/state';
import LogInPage from './pages/LogInPage';
import { usersReducer } from './reducers/usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    ceva: 'ceva'
    }
  }



  render() {
    return (
      <Provider store={store}>
              <Switch>
                <Route>
                  <AppState>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/tennis-courts" component={TennisCourtsPage} />
                  {/* <Route exact path="/tennis-tables" component={TennisTablesPage} /> */}
                  <Route exact path="/profile" component={ProfilePage} />
                  <UserState >
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={LogInPage} />
                  </UserState>
                  </AppState>
                </Route>
              </Switch>
       </Provider>
    );
  }
}

export default App;
