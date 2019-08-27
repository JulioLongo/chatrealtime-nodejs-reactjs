import Sequelize, { Model } from 'sequelize';

class chat extends Model {
  static init(sequelize) {
    // Chamar init da classe Model
    // Dados que vao ser inseridos na table chat
    super.init(
      {
        usuario: Sequelize.STRING,
        mensagem: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
export default chat;
