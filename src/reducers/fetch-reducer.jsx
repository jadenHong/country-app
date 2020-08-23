
import { FETCH_COUNTRIES } from '../actions'

const countryInitialState = {
    isLoading: false,
    data: [],
    errorMessage: ''
}

export const countryReducer = (state = countryInitialState, action) => {
    switch (action.type) {
        case `${FETCH_COUNTRIES}_PENDING`: {
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            }
        }
        case `${FETCH_COUNTRIES}_FULFILLED`: {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                errorMessage: '',
            }
        }
        case `${FETCH_COUNTRIES}_REJECTED`: {
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }
        }
        default: return state;
    }
}

