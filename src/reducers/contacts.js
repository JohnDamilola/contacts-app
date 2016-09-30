import initialState from '../app.js';

export default function contacts(state=initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
        const newState = [
            ...state,
            {
                name: action.name,
                phone: action.phone,
                index: action.index,
                group: "all",
                
            }
        ];

        return newState;
    case 'DELETE_CONTACT':
        return [
            ...state.slice(0,action.index),
            ...state.slice(action.index + 1)
        ];
    default: 
        return state;

  }
}