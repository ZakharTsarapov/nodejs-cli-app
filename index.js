const contacts = require("./contacts");
const argv = require("yargs").argv;


async function invokeAtction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);

    default:
      // console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAtction(argv)
