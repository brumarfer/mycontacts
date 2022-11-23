const { uuid } = require('uuidv4');

const contacts = [
  {
  id: uuid(),
  name: 'Matheus Vitoriano',
  email: 'matheus@mail.com',
  phone: '123456789',
  category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
