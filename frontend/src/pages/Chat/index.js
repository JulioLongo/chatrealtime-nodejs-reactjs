/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import { Row, Col, FormGroup, Input } from 'reactstrap';

import { FaRocketchat, FaRegPaperPlane } from 'react-icons/fa';
import { Container, Form, SubmitButton, List, Mensagem } from './styles';

import api from '../../services/api';

const socket = io('http://localhost:3333');

export default function Main({ match }) {
  const [mensagemCarregada, setMensagemCarregada] = useState([]);
  const [mensagem, setMensagem] = useState('');

  // useEffect só executado quando o componente é montado.
  // Busca Mensagens
  useEffect(() => {
    async function loadMensagens() {
      const response = await api.get('/chat');

      console.log(response.data);
      setMensagemCarregada(response.data);
    }
    loadMensagens();
  }, []);

  // Quando enviar Mensagem,pega usuario da URL e enviar um POST
  async function handleEnviarMensagem(e) {
    e.preventDefault();
    console.log(mensagem);

    const username = match.params.usuario;

    const response = await api.post(`/chat/${username}`, {
      mensagem,
    });
    console.log(response);

    // Adiciona no array a nova mensagem
    const addItem = () => {
      setMensagemCarregada([...mensagemCarregada, response.data]);
    };
    addItem();

    // Enviar para os outros a mensagem.
    socket.emit('sendMessage', response.data);
  }

  // Quando receber a mensagem, atualizar o array
  socket.on('receivedMessage', function receiveMessage(message) {
    const addItem = () => {
      setMensagemCarregada([...mensagemCarregada, message]);
    };
    addItem();
  });

  return (
    <Container>
      <Row className="text-center">
        <Col>
          <div>
            <h1>
              <FaRocketchat />
              <spam>CHAT</spam>
            </h1>
          </div>
        </Col>
      </Row>

      <List className="text-center text-md-right">
        {mensagemCarregada.map(user => (
          <li key={user.id}>
            <Mensagem>
              <spam>{user.usuario}: </spam>
              <spam>{user.mensagem}</spam>
              <div className="buttons" />
            </Mensagem>
          </li>
        ))}
      </List>

      <Form onSubmit={handleEnviarMensagem}>
        <Row form className="text-center">
          <Col md={10}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Digite sua mensagem"
                value={mensagem}
                onChange={e => setMensagem(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <SubmitButton type="submit">
                <FaRegPaperPlane color="#FFF" size={14} />
              </SubmitButton>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
