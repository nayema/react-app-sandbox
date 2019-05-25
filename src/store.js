import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import routes from "./pages.routes"

const { routingEnhancer, routingMiddleware, routingReducer, initialDispatch } = routes()

const initialState = {};
const enhancers = [];
const middlewares = [
  thunk,
  routingMiddleware
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  routingEnhancer,
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  combineReducers({ location: routingReducer, ...rootReducer }),
  initialState,
  composedEnhancers
);

initialDispatch()

export default store
