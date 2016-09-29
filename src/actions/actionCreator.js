// add contact
export function addContact(name,phone,index) {
  return {
    type: 'ADD_CONTACT',
    name,
    phone,
    index
  }
}
