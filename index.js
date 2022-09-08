const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

const argv = yargs(hideBin(process.argv)).argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      const getData = getContactById(id);
      console.log(getData);
      break;

    case 'add':
      const addData = await addContact(name, email, phone);
      console.log(addData);
      break;

    case 'remove':
      const info = await removeContact(id);
      console.log(info);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
