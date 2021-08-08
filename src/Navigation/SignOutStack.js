import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import SplashScreen from '../Screens/SplashScreen';
const Stack = createStackNavigator()

export default function SignOutStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}

                <Stack.Screen name="Login" component={Login} />

                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}