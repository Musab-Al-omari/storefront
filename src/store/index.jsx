import {createStore, combineReducers} from 'redux';
import Cata from './Cata';
// enable an extension on ur browser for redux store checking.. 
// import {composeWithDevTools} from 'redux-devtools-extension';
let reducers = combineReducers({lists: Cata});
// console.log("reducers >>> " ,reducers);
const store = () => {
    return createStore(reducers)
}
export default store();