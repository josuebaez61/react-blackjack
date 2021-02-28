import { types } from "../types/types";

const initialState = {
    player_points: 0,
    ia_points: 0,
    player_rounds: 0,
    ia_rounds: 0
}

export const scoreReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.setPlayerPoints:

            const player_points = state.player_points + action.payload;

            return {...state, player_points };
    
        default:
            return state;
    }
}