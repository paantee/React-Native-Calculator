import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calculator from './assignments/calculator';
import Guess from './assignments/guess';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Calculator') {
              iconName = focused
                ? 'calculator'
                : 'calculator';
            } else if (route.name === 'Guess Game') {
              iconName = focused
                ? 'game-controller'
                : 'game-controller';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="Guess Game" component={Guess} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
