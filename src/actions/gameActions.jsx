import { types } from '../types/types';

export const initGame = () => ({ type: types.initGame });
export const pickCard = ( turn ) => ({ type: types.pickCard, turn });
export const changeTurn = ( currentTurn ) => ({ type: types.changeTurn, currentTurn })
export const execIATurn = () => ({ type: types.execIATurn })
// export const endTurn = ( turn ) => ({ type: types.endTurn, turn });