import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../Screens/MainScreen';
import CanvasScreen from '../Screens/CanvasScreen';
const Stack = createStackNavigator()

export default function SignInStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="CanvasScreen" component={CanvasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}