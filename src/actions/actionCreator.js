// add contact
export function addContact(name, phone, index, group) {
  return {
    type: 'ADD_CONTACT',
    name,
    phone,
    index,
    group
  }
}

export function deleteContact(index) {
  console.log("deleting contacts");
  return {
    type: 'DELETE_CONTACT',
    index,
  }
}
