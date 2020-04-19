import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Image, Keyboard } from 'react-native';

import { Container, Form, Input, SubmitButton } from './styles';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/user/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loading = useSelector((state) => state.user.loading);

  const [id, setId] = useState('');

  function handleSubmit() {
    if (id === '') return;
    dispatch(signInRequest(id, navigation));
    setId(' ');
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <Input
          placeholder="Informe seu ID de cadastro"
          keyboardType="number-pad"
          value={id}
          onChangeText={setId}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
