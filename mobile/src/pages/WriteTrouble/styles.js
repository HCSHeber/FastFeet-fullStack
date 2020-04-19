import styled from 'styled-components';

import Button from '~/components/Button';

export const InputBox = styled.TextInput.attrs({
  textAlignVertical: 'top',
  multiline: true,
  placeholder: 'Inclua aqui o problema que ocorreu na entrega',
})`
  height: 75%;
  padding: 20px;
  elevation: 3;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const SubmitButton = styled(Button)`
  background-color: #7d40e7;
`;
