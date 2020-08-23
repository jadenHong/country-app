import { COUNTER_CHANGE, ADD_TEXT } from '../actions';

const counterInitialState = {
    count: 0,
}

export const counterReducer = (state = counterInitialState.count, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return state + action.amount;

        default:
            return state;
    }
}

const textInitialState = {
    text: '',
}

export const textReducer = (state = textInitialState.text, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return [...state, action.text]

        default:
            return state;
    }
}