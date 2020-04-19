import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '~/components/DeliveryScreensLayout';

import {
  Title,
  TroubleList,
  Trouble,
  TroubleText,
  TroubleDate,
} from './styles';

import api from '~/services/api';

export default function Troubles() {
  const delivery = useSelector((state) => state.delivery.delivery);
  const [troubles, setTroubles] = useState([]);

  useEffect(() => {
    async function loadTroubles() {
      const response = await api.get(
        `delivery/problems?orderId=${delivery.id}`
      );
      setTroubles(response.data);
    }
    loadTroubles();
  }, [delivery.id]);

  return (
    <Container>
      <>
        <Title>{delivery.product}</Title>
        <TroubleList
          data={troubles}
          keyExtractor={(item) => `trouble_${item.id}`}
          renderItem={({ item }) => (
            <Trouble>
              <TroubleText>{item.description}</TroubleText>
              <TroubleDate>14/01/2020</TroubleDate>
            </Trouble>
          )}
        />
      </>
    </Container>
  );
}
