import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { gameReducer } from './reducers/gameReducer';


const reducers = combineReducers({
    game: gameReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);