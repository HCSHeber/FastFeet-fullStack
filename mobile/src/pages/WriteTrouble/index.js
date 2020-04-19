import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Alert, Keyboard } from 'react-native';

import Container from '~/components/DeliveryScreensLayout';

import { InputBox, SubmitButton } from './styles';

import api from '~/services/api';

export default function WriteTrouble() {
  const navigation = useNavigation();

  const id = useSelector((state) => state.delivery.delivery.id);
  const [text, setText] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`delivery/${id}/problems`, { description: text });
      navigation.navigate('TroubleList');
      setText('');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao enviar problema. Tente novamente');
    }
    Keyboard.dismiss();
  }

  return (
    <Container>
      <>
        <InputBox onChangeText={setText} value={text} />
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </>
    </Container>
  );
}
