import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import contacts from './contacts.js';

const rootReducer = combineReducers({
      contacts,
      routing:routerReducer,
    }
);

export default rootReducer;