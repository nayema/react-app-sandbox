import { combineReducers } from "redux";

import pagesReducer from './pages.reducer'

const appReducer = combineReducers({
  pages: pagesReducer
});

export default appReducer
