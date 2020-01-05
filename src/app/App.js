import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import "../styles/taskker.css";
import './App.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

 
import TennisCourtsPage from './pages/TennisCourtsPage';

import LogInPage from './pages/LogInPage';
import { usersReducer } from './reducers/usersReducer';
import { registerReducer } from './reducers/registerReducer';
import { RegisterContainer } from './containers/RegisterContainer';

const rootReducer = combineReducers({
  users: usersReducer,
  registerPage: registerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

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
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/tennis-courts" component={TennisCourtsPage} />
                  {/* <Route exact path="/tennis-tables" component={TennisTablesPage} /> */}
                  <Route exact path="/profile" component={ProfilePage} />
                  <Route exact path="/register" component={RegisterContainer} />
                  <Route exact path="/login" component={LogInPage} />
                </Route>
              </Switch>
       </Provider>
    );
  }
}

export default App;
