import React from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View, TouchableOpacity } from 'react-native';

import {
  Container,
  TopSection,
  Index,
  Title,
  Progress,
  ProgressBar,
  Stages,
  Stage,
  StagePoint,
  StageTitle,
  BottomSection,
  InfoText,
  MoreText,
} from './styles';

import { setFocusedDelivery } from '~/store/modules/delivery/actions';

export default function Delivery({ delivery }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleSetDeliveryFocused() {
    dispatch(setFocusedDelivery(delivery));
    navigation.navigate('Details');
  }

  return (
    <Container>
      <TopSection>
        <Index>
          <Icon name="local-shipping" size={30} color="#7D40E7" />
          <Title>{delivery.product}</Title>
        </Index>
        <Progress>
          <ProgressBar />
          <Stages>
            <Stage>
              <StagePoint />
              <StageTitle>Aguardando retirada</StageTitle>
            </Stage>
            <Stage>
              <StagePoint unfinished={!delivery.start_date && true} />
              <StageTitle>Retirada</StageTitle>
            </Stage>
            <Stage>
              <StagePoint unfinished={!delivery.end_date && true} />
              <StageTitle>Entregue</StageTitle>
            </Stage>
          </Stages>
        </Progress>
      </TopSection>
      <BottomSection>
        <View>
          <Text>Data</Text>
          <InfoText>
            {format(parseISO(delivery.createdAt), 'dd/MM/yyyy')}
          </InfoText>
        </View>
        <View>
          <Text>Cidade</Text>
          <InfoText>{delivery.recipient.city}</InfoText>
        </View>
        <TouchableOpacity onPress={handleSetDeliveryFocused}>
          <MoreText>Ver detalhes</MoreText>
        </TouchableOpacity>
      </BottomSection>
    </Container>
  );
}

Delivery.propTypes = {
  delivery: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ).isRequired,
};
