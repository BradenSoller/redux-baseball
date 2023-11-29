import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';


import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const pitcherList = (state = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    if (action.type === 'PITCHER_LIST') {
        const currentList = action.payload;

        return [...state, currentList]
    }
}

const reduxStore = createStore(
    combineReducers({
        pitcherList
    })
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={reduxStore}>
        <App />
    </Provider>
    
);
