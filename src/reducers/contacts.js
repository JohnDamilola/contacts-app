function getId(state) {
    return state.contacts.reduce((maxId,contact) => {
        return Math.max(contact.id,maxId)
    }, -1) + 1
}

export default function contacts(state=[], action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      Object.assign({}, state, {
          contacts: [{
              name: action.name,
              phone: action.phone,
              index: getId(state),
          },...state]
      })
      break;
    default: 
        return state;

  }
}

// export default function contacts(state=[], action) {
//     console.log(state,action)
//     return state;
// }