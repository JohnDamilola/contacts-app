// add contact
export function addContact(name,phone,group) {
  return {
    type: 'ADD_CONTACT',
    name,
    phone,
    group,
  }
}
