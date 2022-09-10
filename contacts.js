const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db/contacts.json');
const contactsParse = async () => {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch (error) {
    return console.error(error);
  }
};

async function listContacts() {
  const contactsList = await contactsParse();
  return contactsList;
}

async function getContactById(contactId) {
  const contactsList = await contactsParse();

  const index = contactsList.findIndex(({ id }) => id === contactId.toString());

  if (index === -1) {
    throw new Error(`no contact found with this id: ${contactId}`);
  }
  return contactsList[index];
}

async function removeContact(contactId) {
  try {
    const contactsList = await contactsParse();

    const index = contactsList.findIndex(({ id }) => id === contactId.toString());
    if (index === -1) {
      throw new Error(`no contact found with this id: ${contactId}`);
    }
    const delContact = contactsList.splice(index, 1);

    const convertedContact = JSON.stringify(contactsList, null, 2);
    fs.writeFile(contactsPath, convertedContact);

    return delContact;
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contactsList = await contactsParse();

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };

    contactsList.push(newContact);

    const convertedContact = JSON.stringify(contactsList, null, 2);
    fs.writeFile(contactsPath, convertedContact);

    return newContact;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { listContacts, addContact, getContactById, removeContact };
