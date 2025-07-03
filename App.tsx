import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashBoardScreen from './screens/DashBoardScreen';

// Define the type for your root stack param list
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login Screen' }} // Optional: customize screen title
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Register Screen' }} // Optional
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashBoardScreen} 
          options={{ title: 'Dashboard' }} // Optional
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}