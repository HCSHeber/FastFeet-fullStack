import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSection = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background-color: #fff;
  padding: 50px 15px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 7px;
      text-align: left;
      color: #444444;
    }

    span {
      color: red;
      margin-bottom: 10px;
      position: relative;
      top: -10px;
      font-weight: bold;
    }

    input {
      height: 40px;
      border-radius: 4px;
      border: 1px solid #ededed;
      margin-bottom: 15px;
      padding: 10px;
    }

    button {
      height: 40px;
      background-color: #7d40e7;
      font-weight: bold;
      color: #ffff;
      border: 0;
      border-radius: 4px;
    }
  }
`;
