import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './state/store';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
