import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
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
  margin-top: 15px;
`;

export const SubmitButton = styled.button`
  color: #fff;
  background: #22dda5;
  border: 0;
  padding: 7px 15px;
  margin-left: 0px;
  border-radius: 4px;
`;
