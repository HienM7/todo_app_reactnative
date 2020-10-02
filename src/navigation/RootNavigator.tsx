import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoContainer, RegisterContainer } from '@screens';


const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Todo"
          component={TodoContainer}
          options={{ title: 'Todo', headerShown: false }}
        /> */}
        <Stack.Screen
          name="Register"
          component={RegisterContainer}
          options={{ title: 'Todo', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};