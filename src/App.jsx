import React from 'react'
import AppRouter from './router/AppRouter';
import { store } from './store';
import { Provider } from 'react-redux';

export const App = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
