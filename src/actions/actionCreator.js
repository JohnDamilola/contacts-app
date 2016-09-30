// add contact
export function addContact(name,phone) {
  return {
    type: 'ADD_CONTACT',
    name,
    phone,
  }
}
