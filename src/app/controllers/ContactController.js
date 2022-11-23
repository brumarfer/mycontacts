const ContactsRepository = require('../repositories/ContactsRepository')
class ContactController {
  async index(req, res) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo Registro
  }

  update() {
    // Editar um registro

  }

  delete() {
    // Deletar um registro

  }
}

// Singleton - Apenas uma instância de uma classe
module.exports = new ContactController();
