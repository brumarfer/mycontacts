class ContactController {
  index(req, res) {
    // Listar todos os registros

    res.send('Sent from ContactController');
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
