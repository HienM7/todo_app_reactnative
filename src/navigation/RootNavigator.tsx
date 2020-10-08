import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoContainer, GetStartedContainer } from '@screens';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStartedContainer}
          options={{ title: 'GetStarted', headerShown: false }}
        />
        <Stack.Screen
          name="Todo"
          component={TodoContainer}
          options={{ title: 'Todo', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};