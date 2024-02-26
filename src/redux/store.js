import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/userReducer";
import {thunk} from "redux-thunk"; // Import redux-thunk tanpa kurung kurawal
// Menggabungkan reducer ke dalam satu root reducer
const rootReducer = combineReducers({
    userReducer
});

// Membuat middleware chain dengan redux-thunk
const middlewareEnhancer = applyMiddleware(thunk);

// Menggabungkan Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Buat store Redux menggunakan legacy_createStore dengan enhancer yang digabungkan
const store = legacy_createStore(rootReducer, composeEnhancers(middlewareEnhancer));

export default store;
