import Sequelize from 'sequelize';

import Chat from '../app/models/Chat';

import databaseConfig from '../config/database';

const models = [Chat];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Pega conexao que esta em database.js
    this.connection = new Sequelize(databaseConfig);

    // Percorrer pelos modelos
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
