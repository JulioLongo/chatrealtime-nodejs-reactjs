/* eslint-disable no-console */
import Chat from '../models/Chat';

class ChatController {
  async index(req, res) {
    const mensagens = await Chat.findAll({
      limit: 30,
      order: [['id', 'DESC']],
    });

    // Reverter JSON para parecer Chat
    mensagens.reverse();

    return res.json(mensagens);
  }

  async store(req, res) {
    // Pegar usuario da url e mensagem da requisacao json
    const { mensagem } = req.body;
    const { usuario } = req.params;

    console.log(usuario);
    console.log(mensagem);

    const mensagemEnviada = await Chat.create({
      usuario,
      mensagem,
    });

    return res.json(mensagemEnviada);
  }
}

export default new ChatController();
