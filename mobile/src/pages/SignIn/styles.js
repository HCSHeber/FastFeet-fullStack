import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  background-color: #7d40e7;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const Input = styled.TextInput`
  height: 46px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const SubmitButton = styled(Button)`
  background-color: #82bf18;
`;
