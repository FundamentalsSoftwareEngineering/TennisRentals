import React, { Component } from 'react';
import { Router } from "react-router";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import "../styles/taskker.css";
import './App.css';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

 
import TennisCourtsPage from './pages/TennisCourtsPage';

import UserState from './context/users/state';
import AppState from './context/app/state';
import LogInPage from './pages/LogInPage';
import { usersReducer } from './reducers/usersReducer';
import { registerReducer } from './reducers/registerReducer';
import { RegisterContainer } from './containers/RegisterContainer';

const rootReducer = combineReducers({
  users: usersReducer,
  registerPage: registerReducer,
  routerReducer,
});
const browserHistory = createBrowserHistory();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, routerMiddleware)));
const history = syncHistoryWithStore(browserHistory, store);


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
                <Router history={history}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/tennis-courts" component={TennisCourtsPage} />
                  {/* <Route exact path="/tennis-tables" component={TennisTablesPage} /> */}
                  <Route exact path="/profile" component={ProfilePage} />
                  <UserState >
                  <Route exact path="/register" component={RegisterContainer} />
                  <Route exact path="/login" component={LogInPage} />
                  </UserState>
                </Router>
       </Provider>
    );
  }
}

export default App;
