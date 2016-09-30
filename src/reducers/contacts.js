import initialState from '../app.js';

// function getId(state) {
//     return state.contacts.reduce((maxId,contact) => {
//         return Math.max(contact.id,maxId)
//     }, -1) + 1
// }

export default function contacts(state=initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
        const newState = [
            ...state,
            {
                name: action.name,
                phone: action.phone
            }
        ];

        return newState;

    default: 
        return state;

  }
}