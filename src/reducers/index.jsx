import { countryReducer } from './fetch-reducer';
import { counterReducer, textReducer } from './Todo-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    countryStore: countryReducer,
    counterStore: counterReducer,
    textStore: textReducer,
});




















// import { combineReducers } from 'redux'
// import { FETCH_COUNTRIES, COUNTER_CHANGE, ADD_TEXT } from '../actions/'

// const countryInitialState = {
//     isLoading: false,
//     data: [],
//     errorMessage: ''
// }



// const countryReducer = (state = countryInitialState, action) => {
//     switch (action.type) {
//         case `${FETCH_COUNTRIES}_PENDING`: {
//             return {
//                 ...state,
//                 isLoading: true,
//                 errorMessage: '',
//             }
//         }
//         case `${FETCH_COUNTRIES}_FULFILLED`: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 data: action.payload,
//                 errorMessage: '',
//             }
//         }
//         case `${FETCH_COUNTRIES}_REJECTED`: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 errorMessage: action.payload,
//             }
//         }
//         default: return state;
//     }
// }

// const counterInitialState = {
//     count: 0,
// }

// const changCounter = (state = counterInitialState.count, action) => {
//     switch (action.type) {
//         case COUNTER_CHANGE:
//             return state + action.amount;

//         default:
//             return state;
//     }
// }

// const textInitialState = {
//     text: '',
// }

// const inputText = (state = textInitialState.text, action) => {
//     switch (action.type) {
//         case ADD_TEXT:
//             return [...state, action.text]

//         default:
//             return state;
//     }
// }

// export default combineReducers({
//     countryStore: countryReducer,
//     counterStore: changCounter,
//     textStore: inputText,
// })