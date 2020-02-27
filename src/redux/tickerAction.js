import {UPDATE_TICKER_DATA} from "./types";

export const updateTicker = (data) => ({
    type: UPDATE_TICKER_DATA,
    data
});
