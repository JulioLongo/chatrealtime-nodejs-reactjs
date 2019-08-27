import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 40px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  border: 5px #000;
`;

export const SubmitButton = styled.button`
  color: #fff;
  background: #22dda5;
  border: 0;
  padding: 7px 15px;
  margin-left: 55px;
  border-radius: 4px;
`;

export const List = styled.ul`
  list-style: none;
  border-width: 1px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  background: #fff;
`;

export const Mensagem = styled.div`
  display: inline-block;
  background: #f5f5f5;
  border-radius: 6px;
  padding: 2px 10px;
  margin-bottom: 5px;
`;
