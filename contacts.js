const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db/contacts.json');
const contacts = JSON.parse(fsSync.readFileSync(contactsPath));

function listContacts() {
  console.table(contacts);
}

function getContactById(contactId) {
  const index = contacts.findIndex(contact => contact.id === contactId.toString());

  if (index === -1) {
    return `no contact found with this id: ${contactId}`;
  }
  return contacts[index];
}

async function removeContact(contactId) {
  try {
    const index = contacts.findIndex(contact => contact.id === contactId.toString());
    if (index === -1) {
      return `no contact found with this id: ${contactId}`;
    }
    const newContacts = contacts.splice(index, 1);
    const convertedContact = JSON.stringify(contacts, null, 2);
    await fs.writeFile(contactsPath, convertedContact);
    return newContacts;
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const id = uuidv4();
    contacts.push({ id, name, email, phone });
    const convertedContact = JSON.stringify(contacts, null, 2);
    await fs.writeFile(contactsPath, convertedContact);
    return { id, name, email, phone };
  } catch (error) {
    console.error(error);
  }
}

module.exports = { listContacts, addContact, getContactById, removeContact };
