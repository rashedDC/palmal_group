import {combineReducers} from 'redux';

import homeReducer from './home'



const rootReducer = combineReducers ({
    homeData: homeReducer
})



export default rootReducer;