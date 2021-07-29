import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Login from './src/Login';
import Register from './src/Register';
import SplashScreen from './src/SplashScreen';
import MainScreen from './src/MainScreen';
import CanvasScreen from './src/CanvasScreen';
import ScreenRecordTest from './src/ScreenRecordTest';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CanvasScreen" component={CanvasScreen} />
        <Stack.Screen name="ScreenRecordTest" component={ScreenRecordTest} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
