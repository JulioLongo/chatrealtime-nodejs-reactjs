/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Row, Col, Input, FormGroup } from 'reactstrap';

import { FaRocketchat, FaRegPaperPlane } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    newUser: '',
    fireRedirect: false,
  };

  // Quando usuario digitar, anotar o valor de newUser
  handleInputChange = e => {
    this.setState({ newUser: e.target.value });

    /* const { newUser } = this.state;
    console.log(newUser); */
  };

  // Quando clicar no botao, destruturar newUser e enviar no POST
  handleSubmit = async e => {
    e.preventDefault();

    const { newUser } = this.state;
    const response = await api.post(`/chat/${newUser}`, {
      mensagem: 'Entrou no Chat',
    });

    console.log(response.data);
    this.setState({ fireRedirect: true });
  };

  render() {
    const { newUser, fireRedirect } = this.state;

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

        <Form onSubmit={this.handleSubmit}>
          <Row form className="text-center">
            <Col md={10}>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Nome de usuário"
                  value={this.newUser}
                  onChange={this.handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <SubmitButton>
                  <FaRegPaperPlane color="#FFF" size={18} />
                </SubmitButton>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        {fireRedirect && <Redirect to={`/chat/${newUser}`} />}
      </Container>
    );
  }
}
