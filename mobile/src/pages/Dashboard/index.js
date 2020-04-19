import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, TouchableOpacity } from 'react-native';

import Delivery from './Delivery';

import {
  Container,
  PerfilSection,
  ProfileImage,
  PerfilText,
  DeliverysSection,
  Header,
  Title,
  ListOptions,
  Option,
  DeliveryList,
} from './styles';

import { signOut } from '~/store/modules/user/actions';
import { setDeliveriesRequest } from '~/store/modules/deliveries/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [filterFinished, setFilterFinished] = useState(false);

  const profile = useSelector((state) => state.user.profile);
  const deliveries = useSelector((state) => state.deliveries.deliveries);

  useEffect(() => {
    dispatch(setDeliveriesRequest(profile.id));
  }, [dispatch, profile]);

  function handleLogOut() {
    dispatch(signOut(navigation));
  }

  function handleSetFilterFinished() {
    setFilterFinished(true);
  }

  function handleSetFilterUnfinished() {
    setFilterFinished(false);
  }

  return (
    <Container>
      <PerfilSection>
        <ProfileImage
          source={{
            uri: profile.avatar
              ? profile.avatar.url
              : `https://ui-avatars.com/api/?size=170&&name=${profile.name
                  .split(' ')
                  .map((name) => `${name}+`)}`,
          }}
        />
        <PerfilText>
          <Text>Bem-vindo de volta,</Text>
          <Title>{profile.name}</Title>
        </PerfilText>
        <TouchableOpacity onPress={handleLogOut}>
          <Icon name="exit-to-app" size={30} color="#e74040" />
        </TouchableOpacity>
      </PerfilSection>
      <DeliverysSection>
        <Header>
          <Title>Entregas</Title>
          <ListOptions>
            <TouchableOpacity>
              <Option
                firstChild
                select={!filterFinished}
                onPress={handleSetFilterUnfinished}
              >
                Pendentes
              </Option>
            </TouchableOpacity>
            <TouchableOpacity>
              <Option select={filterFinished} onPress={handleSetFilterFinished}>
                Entregues
              </Option>
            </TouchableOpacity>
          </ListOptions>
        </Header>
        <DeliveryList
          data={deliveries}
          keyExtractor={(item) => `delivery_${item.id}`}
          renderItem={({ item }) =>
            filterFinished
              ? item.end_date && (
                  <Delivery navigation={navigation} delivery={item} />
                )
              : !item.end_date && (
                  <Delivery navigation={navigation} delivery={item} />
                )
          }
        />
      </DeliverysSection>
    </Container>
  );
}
