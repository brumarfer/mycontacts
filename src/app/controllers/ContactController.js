const ContactsRepository = require('../repositories/ContactsRepository');
class ContactController {
  async index(req, res) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    // Obter UM registro
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if(!contact) {
      // 404: Not Found
      return res.status(404).json({ error: 'User Not Found' });
    }

    res.json(contact);
  }

  store() {
    // Criar novo Registro
  }

  update() {
    // Editar um registro

  }

  async delete(req, res) {
    // Deletar um registro
    const { id } = req.params

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Can`t delete! User not found.'})
    }

    await ContactsRepository.delete(id);

    // 204: No Contentß
    res.sendStatus(204);
  }
}

// Singleton - Apenas uma instância de uma classe
module.exports = new ContactController();
