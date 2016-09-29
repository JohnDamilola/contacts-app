create a reducer folder
>>>> create a users reducer returning an object containing lists of user Objects
>>>> create a movies reducer returning an object containing lists of movies Objects
>>>> create a index reducer that combines the two reducers into one
      >>>> import { combineReducers } from 'redux';
      >>>> import users from './users.js';
      >>>> import movies from './movies.js';
      >>>> const allReducers = combineReducers({
          users,
          movies
      });
      >>>> export default allReducers;

Inside the index.js file
>>>> import {createStore} from 'redux';
>>>> import allReducers from './reducers/index';
>>>> store = createStore(allReducers);
>>>> import {Provider} from 'react-redux';
>>>> <Provider store={store}>
        <Component />
     </Provider>

      
