import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/DeliveryDetails';
import WriteTrouble from '../pages/WriteTrouble';
import TroubleList from '../pages/TroubleList';
import FinishDelivery from '../pages/FinishDelivery';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7B3FE3',
          elevation: 0,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerBackImage: () => {
          return <Icon name="keyboard-arrow-left" size={30} color="#fff" />;
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerTransparent: true, title: null }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes da encomenda',
        }}
      />
      <Stack.Screen
        name="WriteTrouble"
        component={WriteTrouble}
        options={{
          title: 'Informar problema',
        }}
      />
      <Stack.Screen
        name="TroubleList"
        component={TroubleList}
        options={{
          title: 'Visualizar problemas',
        }}
      />
      <Stack.Screen
        name="FinishDelivery"
        component={FinishDelivery}
        options={{
          title: 'Confirmar entrega',
        }}
      />
    </Stack.Navigator>
  );
}
