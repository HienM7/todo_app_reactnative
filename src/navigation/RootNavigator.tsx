import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoContainer, SplashContainer, GetStartedContainer, RegisterContainer } from '@screens';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegisterContainer}
          options={{ title: 'Register', headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashContainer}
          options={{ title: 'Splash', headerShown: false }}
        />
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
