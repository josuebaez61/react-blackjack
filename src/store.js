import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'redux';
import { gameReducer } from './reducers/gameReducer';
import { scoreReducer } from './reducers/scoreReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    game: gameReducer,
    score: scoreReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);