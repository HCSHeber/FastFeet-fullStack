import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, FormSection } from './styles';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }, { resetForm }) {
    dispatch(signInRequest(email, password));

    resetForm();
  }

  return (
    <Container>
      <FormSection>
        <img src={logo} alt="FastFeet" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            name="email"
            label="seu e-mail"
            type="email"
            placeholder="exemplo@email.com"
          />

          <Input
            name="password"
            label="sua senha"
            type="password"
            placeholder="*******"
          />
          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sitema'}
          </button>
        </Form>
      </FormSection>
    </Container>
  );
}
