import { tennisCourtsConstants } from '../_constants';
import {tennisCourts as tennisCourtsList} from "../_data/tennisCourts";

const initialState =  tennisCourtsList;

export function tennisCourts(state = initialState, action) {
    switch (action.type) {
        case tennisCourtsConstants.GET_ALL_TENNIS_COURTS:
            return {
                items: action.tennisCourts
            };

        default:
            return state
    }
}