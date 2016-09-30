import { createStore } from 'redux';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';

import contacts from './data/contacts';

import rootReducer from './reducers/index.js';

export const initialState = {
    contacts
}

const store = createStore(rootReducer, initialState );

export default store;