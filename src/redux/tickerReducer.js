import {UPDATE_TICKER_DATA} from "./types";

const initialState = {
    tickerData: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TICKER_DATA:
            return {
                ...state,
                tickerData: {...action.data}
            };
        default:
            return state
    }
}

