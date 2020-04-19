import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import App from './Stack';
import Profile from '../pages/Profile';

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === 'Entregas' ? 'view-headline' : 'account-circle';

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        adaptive: true,
      }}
    >
      <Tab.Screen name="Entregas" component={App} />
      <Tab.Screen name="Meu Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
