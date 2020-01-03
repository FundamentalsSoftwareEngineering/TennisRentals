import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware as reduxRouterMiddleware } from 'react-router-redux';
import rootSaga from './sagas';
import {usersReducer} from "./reducers/usersReducer";
import {registerReducer} from "./reducers/registerReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    users: usersReducer,
    registerPage: registerReducer,
    routing: routerReducer,
});


const initStore = (history = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const routerMiddleware = reduxRouterMiddleware(history);

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(
            sagaMiddleware,
            routerMiddleware
        )),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default initStore;