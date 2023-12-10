const argv = require("yargs").argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.table(allContacts);
      break;

    case "get":
      const foundContact = await getContactById(id);
      console.log(foundContact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log("Added contact:", newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.log("Removed contact:", removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
}

invokeAction(argv);
