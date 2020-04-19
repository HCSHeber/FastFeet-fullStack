import styled from 'styled-components';

import { Form } from '@rocketseat/unform';

export const FormContainer = styled(Form)`
  #topSection {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    padding: 0 20px;
    border: 2px solid #f1f1f1;
    border-radius: 4px;

    ::-webkit-calendar-picker-indicator {
      opacity: 1;
      color: #c1c1c1;
      background-color: transparent;
      cursor: pointer;
    }
  }

  label {
    font-weight: bold;
  }
`;
