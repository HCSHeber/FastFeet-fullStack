import React from 'react';
import { format, parseISO } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Alert } from 'react-native';
import IconMd from 'react-native-vector-icons/MaterialIcons';
import IconMdc from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';

import {
  Box,
  TitleBox,
  Title,
  InfoTitle,
  Row,
  Actions,
  Action,
  ActionSub,
} from './styles';

import Container from '~/components/DeliveryScreensLayout';

import { setDeliveriesRequest } from '~/store/modules/deliveries/actions';

export default function Details() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const delivery = useSelector((state) => state.delivery.delivery);
  const userId = useSelector((state) => state.user.profile.id);
  const { recipient } = delivery;

  async function setStartDelivery() {
    try {
      await api.put(`deliveryman/${userId}/deliveries/${delivery.id}/start`);
      dispatch(setDeliveriesRequest(userId));
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao confirmar entrega. Tente novamente');
    }
  }

  function handleConfirmDelivery() {
    Alert.alert('Retirada', 'Confirmar Retirada', [
      { text: 'Confirmar', onPress: setStartDelivery },
      { text: 'Agora não' },
    ]);
  }

  return (
    <Container>
      <>
        <Box>
          <TitleBox>
            <IconMd name="local-shipping" size={25} color="#7D40E7" />
            <Title>Informações da entrega</Title>
          </TitleBox>
          <InfoTitle>Destinatário</InfoTitle>
          <Text>{delivery.recipient.name}</Text>
          <InfoTitle>Endereço de entrega</InfoTitle>
          <Text>
            {recipient.street}, {recipient.house_number}, {recipient.city} -{' '}
            {recipient.state}, {recipient.cep}
          </Text>
          <InfoTitle>Produto</InfoTitle>
          <Text>{delivery.product}</Text>
        </Box>
        <Box>
          <TitleBox>
            <IconMd name="today" size={25} color="#7D40E7" />
            <Title>Situação da entrega</Title>
          </TitleBox>
          <InfoTitle>Status</InfoTitle>
          <Text>
            {delivery.end_date
              ? 'Finalizada'
              : delivery.start_date
              ? 'Retirada'
              : 'Pendete'}
          </Text>
          <Row>
            <View>
              <InfoTitle>Data de retirada</InfoTitle>
              <Text>
                {delivery.start_date
                  ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
                  : '--/--/--'}
              </Text>
            </View>
            <View>
              <InfoTitle>Data de entrega</InfoTitle>
              <Text>
                {' '}
                {delivery.end_date
                  ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
                  : '--/--/--'}
              </Text>
            </View>
          </Row>
        </Box>
        {!delivery.end_date ? (
          <Actions>
            <Action onPress={() => navigation.navigate('WriteTrouble')}>
              <IconMd name="highlight-off" size={30} color="#E74040" />
              <ActionSub>Informar{'\n'}Problema</ActionSub>
            </Action>

            <Action middle onPress={() => navigation.navigate('TroubleList')}>
              <IconMd name="info-outline" size={30} color="#EAC563" />
              <ActionSub>Visualizar{'\n'}Problemas</ActionSub>
            </Action>

            {delivery.start_date ? (
              <Action onPress={() => navigation.navigate('FinishDelivery')}>
                <IconMdc
                  name="check-circle-outline"
                  size={30}
                  color="#A379ED"
                />
                <ActionSub>Confirmar{'\n'}Entrega</ActionSub>
              </Action>
            ) : (
              <Action onPress={handleConfirmDelivery}>
                <IconMdc
                  name="package-variant-closed"
                  size={30}
                  color="#2CA42B"
                />
                <ActionSub>Marcar{'\n'}Retirada</ActionSub>
              </Action>
            )}
          </Actions>
        ) : null}
      </>
    </Container>
  );
}
